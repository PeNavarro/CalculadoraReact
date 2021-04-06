import React from 'react'

function Maiusculo({texto}){

  const textoDigitado = texto
  const textoMaiusculo = textoDigitado.toUpperCase()

  return(
    <>
      {textoMaiusculo}
    </> 
  )

}

export default Maiusculo