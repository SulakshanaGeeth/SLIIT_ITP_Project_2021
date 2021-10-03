import React, {useState} from "react"
import axios from "axios";

export default function AddRequest(){

    const [request,setRequest] = useState("");

    function sendData(e){
        e.preventDefault();
        alert("Request Sent")

        const newRequest ={

            request
        }

        axios.post("http://localhost:3000/freeCard/add",newRequest).then(()=>{
            alert("Request Added")
        }).catch((err)=>{
            alert(err)
        })


    }

    return(

        <div className="container">
            
        <form onSubmit={sendData}>           
            <div className="form-group" classNameName="container">
            <br />
            <div align="center" >
            <h3>REQUEST FREE CARD</h3><br />
            </div>
              

                <div style={{color:"green"}} align="center">
            <h5>Welcome to the I-max Higher Education Institute.</h5> 
                </div>  
                <div>   
                 <br /> 
                 <br /> 
                 <br />  
                    <h6>                 
                <label for="request">Please fill below application to request explain the reason.</label></h6>
                </div>
                
               
                <textarea className="form-control" id="request" rows="5" placeholder="Add Your Request" onChange={(e => {
                    setRequest(e.target.value);
                })}>
                </textarea>
                
                <br />
                <div  align="center" >
                

                <button type="submit" className="btn btn-primary btn-lg">Submit</button>
                
                </div>
            </div>
        </form>
        
    </div>










    )
}