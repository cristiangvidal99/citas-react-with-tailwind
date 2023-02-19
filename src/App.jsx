import React from 'react'
import Header from './components/Header'
import Formulario from './components/Formulario'
import ListadoPacientes from './components/ListadoPacientes'

const App = () => {
  return (
    <div className='container mx-auto mt-20'>
      <Header />
      <Formulario />
      <ListadoPacientes />
    </div>
  )
}

export default App