/**Efetua a soma de dois números
@author Pedro Mack Navarro
@version 1.0
@param float {num1} primeiro número a ser somado
@param float {num2} segundo número a ser somado
@returns float retorna a soma dos dois números
*/

function Soma(num1, num2){
   return (parseFloat(num1)+parseFloat(num2)).toFixed(2)
}

module.exports = Soma