import React from "react";
import { useEffect } from "react";

import { unicoPersonaje } from "../Funciones/Funciones";

import { useState } from "react";

function Personaje (){

    const [personaje,setPersonaje] = useState(null)

  const params = Math.floor(Math.random() * 20) + 1;

  useEffect(()=>{
    unicoPersonaje(params, setPersonaje)  
  },[])

  return(
    <>    
    {personaje != null ? (

      <section className="container">
        <img className="logo_personaje" src={require("../Imagenes/Rick_and_Morty.png")} />
        <div className="contenedor_personaje">
          <img className="imagen_personaje" src={personaje.image}/>
          <div className="div_textos">
            <h1 className="titulo_personaje">{`¡Felicidades! Tu personaje es: ${personaje.name}`}</h1>
            <h1 className="descripcion">El tipo de especie de su personaje es:  </h1>
            <h1 className="tipo">{`${personaje.species}`}</h1>
            <h1 className="descripcion">El genero de su personaje es: </h1>
            <h1 className="tipo">{`${personaje.gender}`}</h1>
          </div>
        </div>
      </section>
      
    ): ("No hay personajes :D")}
    </>
  )
}

export default Personaje