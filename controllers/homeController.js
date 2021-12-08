module.exports.home = function(req,res){
    return res.render('index');
}

module.exports.initiatives = function(req,res){
    return res.render('initiative-page');
}

module.exports.about = function(req,res){
    return res.render('about');
}