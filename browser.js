var React = require('react'),
    ReactDOM = require('react-dom'),
    // This is our React component, shared by server and browser thanks to browserify
    App = React.createFactory(require('./App'))

// This script will run in the browser and will render our component using the
// value from the 'data-initial-props' attribute that we generate inline in the page's html on the server.
// If these props match what is used in the server render, React will see that
// it doesn't need to generate any DOM and the page will load faster

var els = document.querySelectorAll('[data-initial-props]');
var initialProps = JSON.parse(els[0].getAttribute('data-initial-props'));
ReactDOM.render(App(initialProps), document.getElementById('content'));





