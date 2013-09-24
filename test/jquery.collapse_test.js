require("./test_helper.js");
require("../src/jquery.collapse");


describe('jQuery Collapse', function(){
  describe('initialisation', function(){

    var el = jQuery(),
      options = {},
      collapse = new jQueryCollapse(el, options);

    it('assigns an element', function(){
      collapse.el.should.eq(el);
    })
  })
})
