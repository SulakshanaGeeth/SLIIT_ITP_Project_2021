// import React, {useState, useEffect} from "react"
import Axios from "axios";


export default function DeleteBank (props){

    const id = props.match.params.id;
    console.log(id);
    
    Axios.delete("http://localhost:3000/bank/delete/"+id).then(()=>{
            alert("Bank Deleted");
            props.history.push('/bank/');
        }).catch((err)=>{
            console.log(err)
        })
    

        
    return(
        
        <div className="container">
            
            {/* <h1>This is bank delete Page</h1> */}
                
         </div>
    )
}