import React from 'react';
import './modal.css';

function Modal({title, content, close}) {
  return (
    <div className='modal'>

        <div className='modal__container'>

            <div className='modal__close' onClick={()=> close(false)}> &times; </div>
      
       <div className='modal__title'>
 <h2>{title} </h2>

       </div>
     
     <div className='modal__content'>


         <h2>{content}</h2>

     </div>

    <div className='modal__footer'>

        <button className='btn' onClick={()=> close(false)}>{close}</button>

    </div>


        </div>
      
    </div>
  );
}

export default Modal;
