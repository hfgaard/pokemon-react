var React = require('react');
var Header = require('./components/Header.jsx');
var Pokedex = require('./components/Pokedex.jsx');

var App = React.createClass({
  render: function() {
    return (
      <main>
        <Header />
        <Pokedex />
        <Pokedex />
      </main>
    )
  }
});

React.render(<App appName='Pokedex' />, document.body);
