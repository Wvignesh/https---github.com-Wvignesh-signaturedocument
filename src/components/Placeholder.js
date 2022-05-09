import SignatureCanvas from "react-signature-canvas";

function Placeholder( {close}) {
 

  return (
    < >

<div className="App">
       
      <div className="signatureContainer card place-card shadow  "   >
    <span className='d-flex x-mark mx-2  fs-3 p-1'>  <i class="fa-solid fa-xmark "  value="Delete" id="delete" type="button" onClick={()=> close(false)} ></i></span>
        <SignatureCanvas
          penColor="#000"
          canvasProps={{
            width: 300,
            height: 200,
            className: "signatureCanvas"
          }}
          
        /> 
         <div className='card-body cb bg-light d-flex   '>
           
    <span   class=" buts pt-0">Sign in this space</span>
    <a href="/#" class="card-link btn but">Assign Party</a>
         </div>
      </div>
      
    </div>

    
      
    </>
  )
}

export default Placeholder


 