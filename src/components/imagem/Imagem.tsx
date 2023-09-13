import React from 'react';
import './Imagem.css';
import axios from 'axios';

var pokeImgReturn: string;
async function GetImagem() {
    const url: string = "https://pokeapi.co/api/v2/pokemon/78/";


    await axios.get(
        url,
        {
            headers:{
                Accept: "application/jason/"
            }
        }
    ).then(
        async function (response) {
            var img: string = response.data.sprites.front_default;

            pokeImgReturn = img;

            return img;
        }
    ).catch();
}

GetImagem();

function Imagem(){
    return(
        <div>
            <h1>
                Rapidash
            </h1>
            <img src={pokeImgReturn} alt="" />
        </div>
    );
}


export default Imagem;