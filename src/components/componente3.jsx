import React from 'react'

export const Componente3 = (objetsProp) => {
 
    const { programa, competencia } = objetsProp;

    return (
      <>
        <button className='bg-red-500   rounded-3xl'>{programa}</button><br/>
        <button className='bg-green-500  rounded-2xl'>{competencia}</button>
      </>
    );
}
export default Componente3;