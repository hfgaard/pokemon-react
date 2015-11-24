var React = require('react');

var headerStyle = {
  textAlign: 'center'
};

var Header = React.createClass({
  render: function() {
    return (
      <header style={headerStyle}>
        <h1>Pokedex</h1>
      </header>
    )
  }
});

module.exports = Header;
