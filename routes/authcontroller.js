var exports = module.exports = {};

exports.home = function (req, res) {  
    
    res.render("index");
}


exports.homeMsg = function (req, res) {
  
    console.log("home page msg",req.flash("error"));
    res.json({success:false,message: req.flash("error")});
}

exports.dashboard = function (req, res) {
    
    var userObj = req.user;  
    userObj.success = true;       
  
    res.render("dashboard-search",userObj ); 
    
}

exports.profile = function (req,res){
    var userObj = req.user;  
    userObj.success = true;     
  
    res.render("user-profile",userObj ); 
}

exports.prelogin = function (req,res){
   
    res.render("log-in");
}

exports.logout = function (req, res) {
    
    req.session.destroy(function (err) {
        res.redirect('/');
    })
}