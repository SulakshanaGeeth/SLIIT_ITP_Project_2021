import React, {useState, useEffect} from "react"
import Axios from "axios";
//import "./AllNotices.css";

export default function Delete (props){

    const id = props.match.params.id
    
    Axios.delete("http://localhost:3000/Notice/delete/"+id).then(()=>{
            alert("Notice Deleted");
            props.history.push('/');
        }).catch((err)=>{
            console.log(err)
        })
    

        
    return(
        
        <div className="container">
            <div class="content">
            
            <h1>Notice delete Page</h1>
            <button className="btn btn-primary" onClick={() => props.history.push("/AllNotices")}>
Back</button>
            
         </div>
         </div>
    )
}