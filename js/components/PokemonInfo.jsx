var React = require('react');

var PokemonInfo = React.createClass({
  render: function() {
    return(
      <div>
        <p>Name: {this.props.pokemon}</p>
        <p>Ability 1: {this.props.ability1}</p>
        <p>Ability 2: {this.props.ability2}</p>
        <p>Type 1: {this.props.type1}</p>
        <p>Type 2: {this.props.type2}</p>
      </div>
    )
  }
})

module.exports = PokemonInfo;
