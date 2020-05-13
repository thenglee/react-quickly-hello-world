// @format
let helloWorldReactElement = /*#__PURE__*/React.createElement("h1", null, "Hello world!");

class HelloWorld extends React.Component {
  render() {
    return /*#__PURE__*/React.createElement("div", null, helloWorldReactElement, helloWorldReactElement);
  }

}

ReactDOM.render( /*#__PURE__*/React.createElement(HelloWorld, null), document.getElementById('content'));
