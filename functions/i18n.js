var i18n = require("i18n");

i18n.configure({
  locales: ['en','ja','iw'],

  directory: __dirname + "/locales",

  defaultLocale: 'en',

  cookieName: 'locale'
});

module.exports = function(req,res,next){

  i18n.init(req, res);

  var current_locale = i18n.getLocale();

  return next();
}
