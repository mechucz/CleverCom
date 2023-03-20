import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Titulo from './components/Titulo/Titulo'
import { Formulario } from './components/Formulario/Formulario'
import { Portada } from './components/Portada/Portada'




///APP PRINCIPAL////
function App() {
  //HOOK ---- el primer valor es el estado ACTUAL, el segundo es el UPDATE del estado
const [contador,setContador] = useState(0) /// esto es un HOOK => NO SE PUEDEN EJECUTAR DENTRO DE UN IF, DE UN FOR ETC


//constantes

const titulo = 'CleverCom' 
const subtitulo= 'Comunicación inteligente para clientes exigentes'
const imagen = '<img src=./imagenes/reactLogo.png/>'

//contador
const handleContador=()=>{
setContador(contador+1)
}


  return (
    <div className="App">
      <Titulo titulo={titulo} subtitulo={subtitulo}/>
      <Portada imagen={imagen} />

      <div>
      <h2>Contador:{contador}</h2>
        <button onClick={handleContador}>Sumar</button>
        
      </div>
     
   
    </div>
  )
  
}

export default App
