import React from 'react'

import '../footer/Footer.css'

interface Props{
    titulo1: string;
    titulo2:string;
}

function Footer(props: Props){
    return(
        <div>
            {props.titulo1}
            {props.titulo2}
        </div>
    )
}


export default Footer