import React, {useRef, useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import Clouds from 'vanta/dist/vanta.clouds.min'
import * as THREE from 'three'

const WelcomeScreen = ({children}) => {
  const myRefDiv = useRef(null)
  const [vanta, setVanta] = useState(0) //vanta va a ser inicializado en "0"

  //En la primer renderizacion, myRefDiv.curren dará nulo, su valor inicial
  console.log("MyRefDiv.curren", myRefDiv.current)

  useEffect(() => {
    console.log("MyRefDiv.curren en useEffect", myRefDiv.current)

    if(!vanta) {
      //Activar efectonubes
      setVanta(Clouds({
        THREE,
        el: myRefDiv.current  
      }))

      console.log("Vanta ya no vale 0")
    }

    //Al salir de la pantalla debemos detener el efecto
    // y des-asociar todos los recursos (div + vanta effect)
    return () => {
      //Dentra de esta funcion se va a realizar la tarea de destruir los recursos
      //tomados por vanta
      if(vanta){
        vanta.destroy()
        console.log("Liberar recursos")
      }
    }
  }, [vanta])

  return (
    <div ref={myRefDiv}>
      WelcomeScreen
    </div>
  )
}

WelcomeScreen.propTypes = {
  children: PropTypes.node,
}

export default WelcomeScreen
