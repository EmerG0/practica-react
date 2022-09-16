import React from 'react';
import { searchPokemon } from '../Components/api';
const { useState } = React;


    const SearchBar = (props) => {
        const {onSearch} = props;
        const [search, setSearch] = useState("");
        const [pokemon, setPokemon] = useState();
    
        const onChange = (event) => {
            setSearch(event.target.value);
            
        }

        const onClick = async (event) => {
            const data = await searchPokemon(search);
            setPokemon(data);
            onSearch(search);
        }

    return (
        <div className='searchBar-box'>
            <div className='searchBar'>
                <input placeholder='Buscar Pokemon'
                       onChange={onChange}
                />
            </div>
            <div className='searchBar-buton'>
                <button onClick={onClick}>Buscar</button>
            </div>
        </div>
    );  
}

export default SearchBar;