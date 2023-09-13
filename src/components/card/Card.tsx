import React from 'react';
import axios from 'axios';
import './Card.css';

interface Props{
    name?: string;
    image?: string;
}

interface Pokemon{
    name: string;
    url: string;
}

async function GetPokemon(){
    const url: string = "https://pokeapi.co/api/v2/";

    var pokeImgReturn: string;
    var pokeNameReturn: string;

    await axios.get(
        url,
        {
            headers: {
                Accept: "application/jason/",
            }
        }
    ).then(
        async function (response){

            var pokemonUrl: string = response.data.pokemon;

            await axios.get(
                pokemonUrl,
                {
                    headers: {
                        Accept: "application/jason"
                    }
                }
            ).then(
                async function (response){
                    var pokeNameArray = [];
                    var pokeName = [];
                    var pokeUrl: string;
                    var name: string;

                    pokeNameArray = response.data.results;

                    pokeName = pokeNameArray.map((pokemon: Pokemon) =>{

                        return pokemon.name;
                    })

                    pokeUrl = pokeNameArray.map((pokemon: Pokemon) =>{

                        return pokemon.url;
                    });

                    await axios.get(
                        pokeUrl[0],
                        {
                            headers:{
                                Accept: "application/jason/"
                            }
                        }
                    ).then(
                        function (response){
                            var pokeImgUrl: string;

                            pokeImgUrl = response.data.sprites.front_default;

                            return pokeImgUrl;
                        }
                    ).catch()

                    console.log(pokeNameReturn, pokeImgReturn)

                    // return {
                    //     pokeName,
                    //     pokeUrl
                    // };
                }
            ).catch();

            
            // var pokeName: Object = response.data.pokemon;

            // var logDoConsole = Object.keys(pokeName).map((key) =>{
            //     var pokeNameMap: Object;

            //     pokeNameMap = pokeName[key as keyof typeof pokeName];

            //     return response;
            // });

            // console.log(logDoConsole);
        }
    ).catch();

    // return console.log(data.ability);

    // return data;
}

GetPokemon();
// console.log(GetPokemon());

function Card(props:Props){
    return(
        <h1>Teste</h1>
    )
}

export default Card;