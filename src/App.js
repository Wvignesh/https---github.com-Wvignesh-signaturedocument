import './App.css';
import React,{useState} from 'react';
import Content from './components/Content';
//import Modal from './components/Modal';
import Navbar from './components/Navbar'; 
import Placeholder from './components/Placeholder';
 

function App() {

  const [showModal, setShowModal] = useState(false)

  return (


    <  >
      <Navbar close={setShowModal} />
      <Content />

   {
     showModal &&(
      <Placeholder close={setShowModal} />
     )
   }

      
        
    

     

    </>
  );
}

export default App;
