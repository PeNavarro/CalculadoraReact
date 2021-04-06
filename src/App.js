import React, {useState, useEffect} from 'react'
import Maiusculo from './components/Maiusculo'
import Maiusculo2 from './components/Maiusculo2'
import MaiusculoChildren from './components/MaiusculoChildren'
import Soma from './components/Soma'

function App(){

  //const [contador, setContador] = useState(0)
  const [num1, setNum1] = useState('')
  const [num2, setNum2] = useState('')
  const [resultado, setResultado] = useState('')

  useEffect(() => {
    document.title = "Calculadora em React"
  }, []) //quando o array estiver vazio, a função é executada apenas uma vez no carregamento da página

  useEffect(() => {
    if(parseFloat(num1.trim()) && parseFloat(num2.trim())){
      setResultado(Soma(num1, num2))
    }else{
      setResultado('')
    }
  },[num1, num2])

  /*function adicionarContador(){
    setContador(contador+1)
    console.log(`O valor ${contador} foi adicionado!`)
    Soma()
  }

  function removerContador(){
    setContador(contador-1)
    console.log(`O valor ${contador} foi removido!`)
  }*/

  return(
    <>
      {/*
      <Maiusculo texto="Bom dia"/>
      <Maiusculo2 texto="Bom dia" cor="#05E6CB"/>
      <MaiusculoChildren>Bom dia</MaiusculoChildren>
      */}

      {/*<div>
        Contador: {contador} <br></br>
        <button onClick={adicionarContador}>Adicionar</button>
        <button onClick={removerContador}>Remover</button>
      </div>
      <br/><br/>*/}

      <div>
        <label>Número 1: </label>
        <input 
        type="number" 
        required 
        value={num1} 
        onChange={e=> setNum1(e.target.value)} //Sem esta linha, o número não apareceria no input pois o valor seria captado porém a view não seria atualizada.
        />

        <br/><br/>

        <label>Número 2: </label>
        <input 
        type="number"
        required 
        value={num2} 
        onChange={e=> setNum2(e.target.value)}
        />

        <br/><br/>

        <label>Resultado: </label>
        <input type="text" readOnly value={resultado}/>
      </div>
    </> 
  )

}

export default App