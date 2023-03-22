import React from 'react'

const Paciente = () => {
  return (
    <div className="mx-5 bg-white shadow-md py-10 px-5 rounded-xl">
        <p className='font-bold mb-3 text-gray-700 uppercase '>Nombre: <span className='font-normal normal-case'>Cato</span></p>
        <p className='font-bold mb-3 text-gray-700 uppercase '>Propietario: <span className='font-normal normal-case'>Gabo</span></p>
        <p className='font-bold mb-3 text-gray-700 uppercase '>Email: <span className='font-normal normal-case'>correo@correo.com</span></p>
        <p className='font-bold mb-3 text-gray-700 uppercase '>Fecha de Alta: <span className='font-normal normal-case'>10/10/2022</span></p>
        <p className='font-bold mb-3 text-gray-700 uppercase '>Sintomas: <span className='font-normal normal-case'>Gato de mierda Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam, debitis nemo! Pariatur nisi eius aspernatur fuga eum consectetur veritatis, minus vitae error possimus ut dolores consequuntur maxime expedita labore veniam.</span></p>
    </div>
  )
}

export default Paciente