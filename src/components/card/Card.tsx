import React from 'react';
import axios from 'axios';
import './Card.css';

interface Props{
    name?: string;
    image?: string;
}

async function GetPokemon(){
    const url: string = "https://pokeapi.co/api/v2/";

    const {data} = await axios.get(
        url,
        {
            headers: {
                Accept: "application/jason",
            }
        }
    );

    return console.log(data.ability);

    // return data;
}

GetPokemon();

function Card(props:Props){
    return(
        <h1>Teste</h1>
    )
}

export default Card;