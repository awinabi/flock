var showdown  = require('showdown');
var converter = new showdown.Converter();

module.exports = {
  makeHtml: function(markdown){
    return converter.makeHtml(markdown);
  },
};