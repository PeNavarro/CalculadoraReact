import React from 'react'

function Maiusculo2(props){

  const textoDigitado = props.texto
  const corFonte = props.cor
  const textoMaiusculo = textoDigitado.toUpperCase()

  return(
    <div style={{color: corFonte}}>
      {textoMaiusculo}
    </div> 
  )

}

export default Maiusculo2