import React, {useState, useEffect} from 'react';

const Formulario = () => {

  const [cliente, setCliente] = useState(second)

  return (
    <div className="md:w-1/2 lg:w-2/5">
      <h2 className="font-black text-center text-3xl">
        Seguimiento de Pacientes
      </h2>
      <p className="text-lg mt-5 text-center mb-10">
        Añade Pacientes y {""}
        <span className="text-indigo-600 font-bold">Administralos</span>
      </p>
      <form 
        action="" 
        className='bg-white shadow-md rounded-lg py-10 px-5 mb-10'
      >
        <div className='mb-5'>
          <label 
            htmlFor="mascota" 
            className='block text-gray-700 uppercase font-bold'>
              Nombre Mascota
          </label>
          <input 
            type="text"
            placeholder='Nombre de la Mascota'
            className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md'
            id='mascota'
          />
        </div>
        <div className='mb-5'>
          <label 
            htmlFor="propietario" 
            className='block text-gray-700 uppercase font-bold'>
              Nombre Propietario
          </label>
          <input 
            type="text"
            placeholder='Nombre del Propietario'
            className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md'
            id='propietario'
          />
        </div>
        <div className='mb-5'>
          <label 
            htmlFor="email" 
            className='block text-gray-700 uppercase font-bold'>
              Email
          </label>
          <input 
            type="email"
            placeholder='Correo@correo.com'
            className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md'
            id='email'
          />
        </div>
        <div className='mb-5'>
          <label 
            htmlFor="alta" 
            className='block text-gray-700 uppercase font-bold'>
              Email
          </label>
          <input 
            type="date"
            className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md'
            id='alta'
          />
        </div>
        <div className='mb-5'>
          <label 
            htmlFor="mensaje" 
            className='block text-gray-700 uppercase font-bold'>
              Sintomas
          </label>
          <textarea 
            id='mensaje'
            className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md'
            placeholder='Tu mensaje'
          />
        </div>
        <input 
          type="submit"
          className='bg-indigo-600 text-white w-full p-3 rounded-md uppercase font-bold hover:bg-indigo-700 transition-all delay-100 cursor-pointer'
          value="Agregar Paciente"
        />
      </form>
    </div>
  );
}

export default Formulario