import React from 'react';
import './App.css';
import SearchBar from './Components/SearchBar';
import Navbar from './Components/Navbar';
import Pokedex from './Components/Pokedex';
import { getPokemonData, getPokemons, searchPokemon } from './Components/api';
import Filtrado from './Components/Filtrado';
const { useState, useEffect } = React;

export default function App() { 
  
  const [pokemons, setPokemons] = useState([]);
  
  const fetchPokemons = async () => {
    try {
      const data = await getPokemons();
      const promises = data.results.map(async (pokemon) => {
        return await getPokemonData(pokemon.url);
      })
      const results = await Promise.all(promises);
      setPokemons(results);
    } catch(error) {}
  };

  useEffect(() => {
    fetchPokemons();
  }, []);

  const onSearch = async (pokemon) => {
    const result = await searchPokemon(pokemon);
    if (result) {
       setPokemons([result]);
    } else {
      return console.log("No hay un resultado")
    }
  }

  return (
    <div>
      <Navbar/>
      <div className="App">
        <SearchBar onSearch={onSearch}/>
        <Filtrado/>
        <Pokedex 
          pokemons={pokemons}
        />
      </div>
    </div>
  );
}
