module.exports.home = function(req,res){
    return res.render('index');
}

module.exports.about = function(req,res){
    return res.render('about');
}
module.exports.initiatives = function(req,res){
    return res.render('initiative-page');
}

// module.exports.team = function(req,res){
//     return res.render('team');
// }

// module.exports.contact = function(req,res){
//     return res.render('contact');
// }