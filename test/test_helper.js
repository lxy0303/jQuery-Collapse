var jsdom = require("jsdom"),
  sinon = require('sinon'),
  jQuery = require("jQuery"),
  window = jsdom.jsdom("<html><body></body></html>").createWindow(),
  document = window.document,
  $ = global.jQuery = jQuery.create(window);
