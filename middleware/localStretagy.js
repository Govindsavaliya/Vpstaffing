const passport = require('passport')
const passportlocal = require('passport-local')
const MainAdmin = require('../models/admin.model')
const LocalStretagy = passportlocal.Strategy;

passport.use(new LocalStretagy({
    usernameField: "email"
},
    async (email, password, cb) => {
        try {
            const user = await MainAdmin.findOne({ email })
            if (user) {
                if (user.password == password) {
                    return cb(null, user);
                } else {                    
                    return cb(null, false);
                }
            } else {
                return cb(null, false);
            }
        } catch (err) {
            return cb(err)
        }
    }
))

passport.serializeUser(async (user, cb) => {
    try {
        return cb(null, user.id)
    } catch (err) {
        return cb(err)
    }

})

passport.deserializeUser(async (id, cb) => {
    try {
        const user = await MainAdmin.findById(id)

        if (user) {
            return cb(null, user)
        } else {
        }
    } catch (err) {
        return cb(err)
    }
})
