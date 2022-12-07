module.exports.checklogin = (req,res,next) => {
    if(req.isAuthenticated()) {
        return next()
    }
    return res.redirect('login')
}

module.exports.checkAdmin = (req,res,next) => {
    if (req.isAuthenticated()) {
        return res.redirect('/userdata')
    }
    return next()
}