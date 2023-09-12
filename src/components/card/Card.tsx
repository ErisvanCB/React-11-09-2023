import React from 'react';
import axios from 'axios';
import './Card.css';

interface Props{
    name?: string;
    image?: string;
}

async function GetPokemon(){
    const url: string = "https://pokeapi.co/api/v2/";

    await axios.get(
        url,
        {
            headers: {
                Accept: "application/jason",
            }
        }
    ).then(
        function (response){
            var pokeName: Object = response.data.pokemon

            var logDoConsole = Object.keys(pokeName).map((key) =>{
                var pokeNameMap: Object;

                pokeNameMap = pokeName[key as keyof typeof pokeName];
                return pokeNameMap;
            });

            console.log(logDoConsole);
        }
    ).catch();

    // return console.log(data.ability);

    // return data;
}

GetPokemon();

function Card(props:Props){
    return(
        <h1>Teste</h1>
    )
}

export default Card;