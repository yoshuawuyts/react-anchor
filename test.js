/*eslint no-unused-expressions: 0*/

/**
 * Module dependencies
 */

var anchorFactory = require('./index');
var should = require('should');
var react = require('react');
var dom = react.DOM;

/**
 * Test
 */

describe('factory = anchorFactory()', function() {
  it('should return a function', function() {
    anchorFactory().should.be.of.type('function');
  });
});

describe('factory()', function () {
  var factory = anchorFactory(function() {done()}, 'hello');

  it('should have default settings', function() {
    var props = factory()._store.props;

    props.className.should.eql('hello');
    props.onClick.should.be.of.type('function');
  });

  it('should use a string as the first arg', function() {
    var props = factory('/hello')._store.props;
    props.href.should.eql('/hello');
  });

  it('should accept an object as the first arg', function() {
    var props = factory({href: '/hi', className: ''})._store.props;
    props.href.should.eql('/hi');
    props.className.should.eql('hello');
  });

  it('should set the inner body', function() {
    var props = factory('', 'world')._store.props;
    props.children.should.eql('world');
  });

  it('should extend default settings', function() {
    var props = factory({className: 'howdy'}, 'world')._store.props;
    props.className.should.eql('hello howdy');
  });

  it('should not cause conflicts on multiple yields', function() {
    var props = factory({className: 'howdy'}, 'world')._store.props;
    props.className.should.eql('hello howdy');

    var props = factory({className: 'howdy'}, 'world')._store.props;
    props.className.should.eql('hello howdy');
  });
});
