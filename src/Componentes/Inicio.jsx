import React,{useEffect, useState} from "react";
import { todosPersonajes } from "../Funciones/Funciones";

function Inicio (){

  const [personajes,setPersonajes] = useState(null)

  useEffect(()=>{
    todosPersonajes(setPersonajes)  
  },[])

  return(
    <>
    {personajes != null ? (
      <div className="contenedor_principal container"> 
        <img className="logo" src={require("../Imagenes/Rick_and_Morty.png")} />
        <a href={`/personaje/0`}>
          <button className="btn btn-primary boton">Click para obtener un personaje</button>
        </a>
      </div>  
    ) : ("no hay personajes ")}
    </>
  )
}

export default Inicio