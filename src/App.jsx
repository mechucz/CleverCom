import { useState } from 'react'
import Logo from './assets/images/logo.png'
import './App.css'
import Titulo from './components/Titulo/Titulo'
import { Formulario } from './components/Formulario/Formulario'
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'




///APP PRINCIPAL////
function App() {


//constantes

const titulo = '' 
const subtitulo= 'Comunicación inteligente'
const greeting= 'Gracias por confiar en nosotros'





  return (
    <div className="App">
      <NavBar></NavBar>
      <ItemListContainer greeting={greeting}/>
       <img src={Logo} alt="logo" style={{ width: '400px', }}/>
      <Titulo  subtitulo={subtitulo}/>
     
    
     
   
    </div>
  )
  
}

export default App
