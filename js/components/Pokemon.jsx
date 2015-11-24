var React = require('react');
var PokemonInfo = require('./PokemonInfo.jsx');
var request = require('superagent');

var divStyle = {
  float: 'left',
  margin: '20px'
};

var Pokemon = React.createClass({
  randomize: function(pokemon) {
    var i = Math.floor((Math.random() * 151) + 1);
    request
      .get('http://pokeapi.co/api/v1/pokemon/' + i)
      .end(function(err, res) {
        if (err) return console.log(err);
        this.setState({
          index: i,
          pokemon: res.body.name,
          species: res.body.species,
          abilities: res.body.abilities,
          types: res.body.types
        })
      }.bind(this))
  },
  getInitialState: function() {
    return {
      index: Math.floor((Math.random() * 151) + 1),
      pokemon: '',
      species: '',
      abilities:[{name:''}, {name:''}],
      types:[{name:''}, {name:''}]
    }
  },
  componentDidMount: function() {
    request
      .get('http://pokeapi.co/api/v1/pokemon/' + this.state.index)
      .end(function(err, res) {
        if (err) return console.log(err);
        this.setState({
          pokemon: res.body.name,
          species: res.body.species,
          abilities: res.body.abilities,
          types: res.body.types
        })
      }.bind(this));
  },
  render: function() {
    return (
      <div style={divStyle}>
        <img src={"http://pokeapi.co/media/img/" + this.state.index + ".png"} alt={"Picture of " + this.state.pokemon} />
        <PokemonInfo
          pokemon={this.state.pokemon}
          species={this.state.species}
          ability1={this.state.abilities[0].name}
          ability2={this.state.abilities[1] ? this.state.abilities[1].name : "None"}
          type1={this.state.types[0].name}
          type2={this.state.types[1] ? this.state.types[1].name : "None"} />
        <button onClick={this.randomize}>Randomize</button>
      </div>
    )
  }
});

module.exports = Pokemon;
