import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';


const Filtrado = () => {

    const [allData, setAllData] = useState([]);
    const [filtrarDato, setFiltrarDato] = useState(allData);

    const handleSearch = (event) => {
        let value = event.target.value.toLowerCase();
        let results =[];
        results = allData.filter((data) => {
        return data.results.name.search(value) != -1;
        });
    }

    useEffect(() => {
        axios('https://pokeapi.co/api/v2/type/')
        .then(response => {
            setAllData(response.date);
            setFiltrarDato(response.data);
        }).catch(error => {
            console.log('Error detectado: ' + error);
        })
    }, []);

  return (
    <div className='filtrado-body'>
        <label>Filtrar: </label>
        <input type="text" placeholder='Filtra por elemento' onChange={(event) => handleSearch(event)}/>
    </div>
  )
}

export default Filtrado;