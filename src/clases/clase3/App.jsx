import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

console.log('hola')

const condition=true
let resultado =''

/*if (condition){
    resultado='es verdadero'
}else{
  resultado='es falso'
}

console.log('El resultado ', resultado)*/

///OPERADOR TERNARIO/////

console.log(`Now El resultado es : ${condition ? 'es verdadero' : 'es falso'}`)

///SPREAD OPERATOR///

const array = [5, 12, 8, 130, 44];
let seis = 6

//metodoflat para unir arrays
//const newArray = [seis,array]
//console.log('newArray', newArray.flat())

//acá despliego el contenido del array con 3 puntos
const newArray = [seis, ...array]
console.log('newArray', newArray.flat())

///PROPIEDADES DINAMICAS

let variableParaApellido = 'Cachaza'
let campo = 'id'
const obj = {
  name: 'Mechu',
  apellido: variableParaApellido,
  [campo]: 'Esto es campo',
  email:'mechucz@gmail.com'
}
console.log(obj)

///DEEP MATCHING///

  //DESTRUCTURING
    //const name = obj.name
    //const apellido = obj.apellido

const {name: firstName, apellido, email='m@gmail.com'} = obj //--> el valor del mail es una asignacion en desestructuración, para poner un valor por defecto
console.log(firstName)
console.log(apellido)
console.log(email)






const array1 = [5, 12, 8, 130, 44];
const found = array1.find(element => element > 10);
console.log(found);



function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>MercaditoCool</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  )
}

export default App
