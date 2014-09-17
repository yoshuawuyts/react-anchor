/*eslint no-unused-expressions: 0*/

/**
 * Module dependencies
 */

var addons = require('react/addons');
var jsdom = require('jsdom').jsdom;
var should = require('should');
var react = require('react');

var anchorFactory = require('./index');
var utils = react.addons.TestUtils;
var dom = react.DOM;

/**
 * Setup DOM env.
 */

beforeEach(function() {
  global.document = jsdom('<html><body></body></html>');
  global.window = document.parentWindow;
});

/**
 * Test
 */

describe('anchorFactory()', function() {
  it('should return a function', function() {
    anchorFactory(function(){}).should.be.of.type('function');
  });
});

describe('anchorFactory()()', function () {
  var factory = anchorFactory(function() {}, 'hello');

  it('should have default settings', function() {
    var hrefFactory = factory({href: ''});
    var el = utils.renderIntoDocument(hrefFactory());
    var props = el._renderedComponent.props;

    props.className.should.eql('hello');
    props.onClick.should.be.of.type('function');
  });

  it('should use a string as the first arg', function() {
    var hrefFactory = factory({href: '/hello'});
    var el = utils.renderIntoDocument(hrefFactory());
    var props = el._renderedComponent.props;

    props.href.should.eql('/hello');
  });

  it('should accept an object as the first arg', function() {
    var hrefFactory = factory({href: '/hi', className: ''});
    var el = utils.renderIntoDocument(hrefFactory());
    var props = el._renderedComponent.props;

    props.href.should.eql('/hi');
    props.className.should.eql('hello');
  });

  it('should set the inner body', function() {
    var hrefFactory = factory({href: ''}, 'world');
    var el = utils.renderIntoDocument(hrefFactory());
    var props = el._renderedComponent.props;

    props.children.should.eql('world');
  });

  it('should extend default settings', function() {
    var hrefFactory = factory({href: '', className: 'howdy'}, 'world');
    var el = utils.renderIntoDocument(hrefFactory());
    var props = el._renderedComponent.props;

    props.className.should.eql('hello howdy');
  });
});
