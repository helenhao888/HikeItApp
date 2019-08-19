var exports = module.exports = {};

exports.home = function (req, res) {  
    
    res.render("index");
}


exports.dashboard = function (req, res) {
    
    var userObj = req.user;  
    userObj.success = true;    
    console.log("dashboard userObj",userObj);
  
    res.render("dashboard-search",userObj ); 
    
}

exports.profile = function (req,res){
    var userObj = req.user;  
    userObj.success = true;    
    console.log("profile userObj",userObj);
  
    res.render("user-profile",userObj ); 
}

exports.prelogin = function (req,res){
    console.log("prelogin");
    res.render("log-in");
}

exports.logout = function (req, res) {
    
    req.session.destroy(function (err) {
        res.redirect('/log-in');
    })
}