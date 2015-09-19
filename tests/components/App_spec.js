var React = require('react');
var TestUtils = require('react/lib/ReactTestUtils'); //I like using the Test Utils, but you can just use the DOM API instead.
var assert = require('assert');
var App = require('../../src/components/App');

describe('initial app rendered', function () {
	beforeEach(function() {
		this.app = TestUtils.renderIntoDocument(<App/>);
	});

  it('renders without problems', function () {
    TestUtils.isDOMComponent(this.app);
  });
  it('has text Hello World', function () {
  	assert.equal(React.findDOMNode(this.app).innerHTML, 'Hello, World!');
  });
  it('returns test for test func', function () {
  	assert.equal(this.app.test(), 'test')
  });
});
