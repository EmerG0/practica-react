import React from 'react';

 const Pokemon = (props) => {
     const { pokemon } = props;
  return (
    <div className='poke-card'>
        <div>
            <img 
                src={pokemon.sprites.front_default}
                alt={pokemon.name}
                className='poke-image'
            />
        </div>
        <div className='card-body'>
            <div className='poke-name'>
                <h3>{pokemon.name}</h3>   
                <div>#{pokemon.id}</div>   
            </div>
            <div>
                <div className="types">
                    {pokemon.types.map((type, idx) => {
                        return <div key={idx}>{type.type.name}</div>
                    })}
                </div>
            </div>
        </div>
    </div>
    ) 
}

export default Pokemon;