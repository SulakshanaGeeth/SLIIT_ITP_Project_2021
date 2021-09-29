import React, {useState}  from "react";
import axios from "axios";
//import "./AllNotices.css";


export default function AddNotice(){

    const[massege,setmassege]=useState("");
    
    const[date,setdate]=useState("");
    function checkforblank(){
      if (document.getElementById('massege').value=="") {
        alert("massege cannot empty");
        
        return false;
      }
  
      if (document.getElementById('date').value=="") {
       alert("date cannot be blank");
       return false;
      }
  


    }

    function sendData(e){
        e.preventDefault();

        if (document.getElementById('massege').value=="") {
          alert("massege cannot empty");
          
          return false;
        }
    
        if (document.getElementById('date').value=="") {
         alert("date cannot be blank");
         return false;
        }


        const newNotice={
            massege,
            
            date

        }

        axios.post("http://localhost:3000/Notice/add",newNotice).then(()=>{
             
            alert("Notice added")
            setmassege("");
           
            setdate("");


        }).catch((err)=>{
            alert(err)
        })

           
    }
    
    
     
    return(
        <div className="container">


        <form onSubmit={sendData} >
        <div className="mb-3">
          <label for="massege" class="form-label">Massege</label>
          <input type="text" class="form-control" id="massege" placeholder="Enter Notice"   onChange={(e)=>{
                
                setmassege(e.target.value);

          }}/>
          
           
          
        </div>
       
        <div className="mb-3">
          <label for="date" class="form-label">Date</label>
          <input type="text" class="form-control" id="date" placeholder="Enter date"   onChange={(e)=>{
                
                setdate(e.target.value);

          }}/>
          
        </div>
        
        <button type="submit" class="btn btn-primary">Submit</button>
      </form>
        </div>


    )





}