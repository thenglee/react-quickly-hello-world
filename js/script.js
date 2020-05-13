// @format
class HelloWorld extends React.Component {
  render() {
    return /*#__PURE__*/React.createElement("h1", this.props, "Hello ", this.props.frameworkName, " world!!!");
  }

}

ReactDOM.render( /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(HelloWorld, {
  id: "ember",
  frameworkName: "Ember.js",
  title: "A framework for creating ambitious web applications."
}), /*#__PURE__*/React.createElement(HelloWorld, {
  id: "backbone",
  frameworkName: "Backbone.js",
  title: "Backbone.js gives structure to web applications..."
}), /*#__PURE__*/React.createElement(HelloWorld, {
  id: "angular",
  frameworkName: "Angular.js",
  title: "Superheroic JavaScript MVW Framework"
})), document.getElementById('content'));
