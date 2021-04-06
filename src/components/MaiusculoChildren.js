import React from 'react'

function MaiusculoChildren(props){

  const textoDigitado = props.children
  const textoMaiusculo = textoDigitado.toUpperCase()

  return(
    <>
      {textoMaiusculo}
    </> 
  )

}

export default MaiusculoChildren