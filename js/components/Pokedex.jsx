var React = require('react');
var Pokemon = require('./Pokemon.jsx');

var Pokedex = React.createClass({
  render: function() {
    return (
      <section>
        <Pokemon />
      </section>
    );
  }
});

module.exports = Pokedex;
