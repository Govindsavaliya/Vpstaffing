const express = require("express");
const cors = require("cors");
const flash = require("connect-flash");
const app = express();
require("dotenv").config();
require("./db/conn");
const passport = require("passport");
app.set('view engine', 'ejs');
app.use(cors());
app.use(flash());
app.use(express.json());
app.use(express.static('public'));
app.use(express.urlencoded({ extended: false ,limit:"200mb"}));

const port = process.env.PORT || 4000;

const session = require("express-session")
const { checkAdmin } = require("./middleware/check")

app.use(session({
  name: "admin",
  resave: false,
  saveUninitialized: false,
  secret: process.env.SECRET_KEY_ADMIN,
  cookie: {
    maxAge: 1000 * 60 * 60 * 24 * 365
  }
}))
app.use(passport.initialize())
app.use(passport.session())
const routes = require('./routes')
app.use(routes)



app.get('/login', checkAdmin, function (req, res, next) {
  res.render('login', { title: 'Express', message: req.flash("message"), messages: req.flash("messages") });
});


app.get('/', function (req, res, next) {
  res.render('index', { title: 'Express', message: req.flash("message"), messages: req.flash("messages") });
});

app.get('/applynow', function (req, res, next) {
  res.render('applynow', { title: 'Express', message: req.flash("message"), messages: req.flash("messages") });
});

app.get('/about', function (req, res, next) {
  res.render('about', { title: 'Express', message: req.flash("message"), messages: req.flash("messages") });
});

app.get('/goverment-solutions', function (req, res, next) {
  res.render('goverment-solutions');
});



app.get('/contactus', function (req, res, next) {
  res.render('contactus', { title: 'Express', message: req.flash("message"), messages: req.flash("messages") });
});

app.get('/client', function (req, res, next) {
  res.render('client', { title: 'Express', message: req.flash("message"), messages: req.flash("messages") });
});


app.get('/referfriend', function (req, res, next) {
  res.render('referfriend', { title: 'Express', message: req.flash("message"), messages: req.flash("messages") });
});

app.get('/benifits', function (req, res, next) {
  res.render('benifits', { title: 'Express', message: req.flash("message"), messages: req.flash("messages") });
});




const adminRoutes = require("./routes/admin.routes");
const loginRoutes = require("./routes/login.routes");
const teamRoutes = require("./routes/team.routes");
const applyRoutes = require("./routes/apply.routes");
const contactRoutes = require("./routes/contact.routes");
app.use("/admin", adminRoutes);
app.use("/user", loginRoutes);
app.use("/team", teamRoutes);
app.use("/apply", applyRoutes);
app.use("/contact", contactRoutes);

app.listen(port, () => {
  console.log(`Server running At PORT ${port}`);
});