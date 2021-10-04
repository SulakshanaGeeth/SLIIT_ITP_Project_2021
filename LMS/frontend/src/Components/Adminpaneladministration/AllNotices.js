import React,{useState,useEffect} from "react";
import axios from "axios";
//import "./AllNotices.css";

const initialState = {
    massege: "",
    date: "",
    
  };



export default function AllNotices(props){
    const [notices ,  setNotices] = useState([]);

    

    useEffect(()=>{
        function getNotices(){

            axios.get("http://localhost:3000/Notice/").then((res)=>{
               setNotices(res.data);

            }).catch((err)=>{

                alert(err.message);
            })
        }

        getNotices();

    },[])

    function Update(id){
        console.log(id)
        props.history.push("/notice/update/"+id)
    }

    function Delete(id){
        console.log(id)
        props.history.push("/notice/delete/"+id)
    }

     return(
      <div className="container"  style={{paddingLeft:15,paddingRight:20,alignItems:"center",justifyContent:'center',justifyContent:'center'}}>
          
              

         <h1 style={{color:"red",display: 'flex',  justifyContent:'center', alignItems:'center', height: '5vh'}}  > All Notices</h1>
         <div className="box1">
          <table className="withdraw-table" >
            <thead>
              <tr>
                                
                <td>Massege</td>
                <td>Date</td>
                <td>Edit</td>
                <td>Delete</td>
               
              </tr>
            </thead>
  
            <tbody>
              {notices.map((item)=> (
                <tr>
                
                 
                  <td>{item.massege}</td>
                  <td>{item.date}</td>

                       
                    <td> {<button type="button" className="btn btn-success mr-2 mb-4" 
                            onClick={() =>Update(item._id)}>Edit</button>}</td>
                              <td> {<button type="button" className="btn btn-danger" 
                            onClick={() =>Delete(item._id)}>Delete</button>}</td>   
         
                    </tr>  
                 ))}   
                 </tbody>
                 </table>
           
     </div>
     </div>
     
     


     

     )

}
