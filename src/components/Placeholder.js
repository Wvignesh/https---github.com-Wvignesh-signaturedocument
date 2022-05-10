import SignatureCanvas from "react-signature-canvas";
import React,{useRef} from "react";
import Draggable from 'react-draggable';

function Placeholder( {close}) {

  const ref = useRef({});

  let data = "";
 
 function clear(){

  ref.current.clear();

 }


function save(){

  data=ref.current.toDataURL()
  alert("confirm your signature")
}


  return (
    < >

<div className="App">
       
      <Draggable>

      <div className="signatureContainer card place-card shadow box "   >
    <span className='d-flex x-mark mx-2  fs-3 p-1'> <span className="fs-6">Sign on Document</span> <i class="fa-solid fa-xmark "  value="Delete" id="delete" type="button" onClick={()=> close(false)} ></i></span>

    <p className="sig py-1 mx-2">Please in this space provided below to confirm your signature</p>
        <SignatureCanvas
          penColor="#000"
          canvasProps={{

            className: "signatureCanvas"
          }}

          ref={ref}
          
        /> 
        <br/>
     
     <div className="radio-sig d-flex">
       
     <input type="radio" className="radio mx-2 " />
<label for="signature" id="label" >Apply this signature for require places on document</label>
     </div>
         

         <div className='card-body cb   d-flex   '>
           
    <span   class="btn but" onClick={save}> Confirm Signature  </span>
    <button className="btn btn-primary" onClick={clear}>Clear</button>
   
         </div>

      </div>
      
      </Draggable>


    </div>

    
      
    </>
  )
}

export default Placeholder


 