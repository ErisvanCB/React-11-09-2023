import React from 'react'

import './Navbar.css'
import axios from 'axios'

interface Props{
    item1: string;
    item2: number;
    ok?: boolean;
    teste?: boolean;
}

// Aqui eu estou fazendo a requisição através do GET 
async function AxiosTeste() {
    const { data } = await axios.get(
      "https://pokeapi.co/api/v2/pokemon/",
  
      {
        headers: {
          Accept: "application/jason/",
        },
      }
    );
  
   /*  Aqui eu estou filtrando os nomes através do map.
    Criei uma variavel que vai estar recebendo o resultado do filtro do map, ai depois passei essa const para ser exibida no console do navegador. */
    const pokeName = data.results.map(
      (pokemon: { name: String }) => pokemon.name
    );
  
    return console.log(pokeName);
  }
  
  AxiosTeste();

function Navbar(props: Props){
    return(
        <div>            
            {props.item1}
            {props.item2}
        </div>
    );
}

export default Navbar; 