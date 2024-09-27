import React from 'react';

const Componente1 = (objetoProp) => {


  const { nombre, apellido } = objetoProp;

  return (
    <>
      <button className='bg-orange-600 rounded-3xl'>{nombre}</button><br/>
      <button className='bg-orange-300 rounded-2xl'>{apellido}</button>
    </>
  );
};

export default Componente1;
