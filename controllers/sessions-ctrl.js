exports.getAuth = function(req, res, next) {
  if (req.isAuthenticated()) {
    console.log('getAuth(): ', req); 
    return next(); 
  }
  res.render('welcome/index', {layout: 'welcome'});
}