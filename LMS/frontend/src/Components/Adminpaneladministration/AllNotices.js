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
     <div className="container">

         <h1 >All Notices</h1>
         <ul>
                {notices.map(item => (
                    <li Notice_no={item.Notice_no}>
                        <h1>{item.Notice_no}</h1>
                        <h1>{item.massege}</h1>
                        <h1>{item.date}</h1>
                     

                        <button type="button" className="btn btn-success mr-2 mb-4" 
                            onClick={() =>Update(item._id)}>Edit</button>
                        <button type="button" className="btn btn-success mr-2 mb-4"
                        onClick={() =>Delete(item._id)}>Delete</button>
                       
                        
                    </li>
                ))}
                </ul>
           
     </div>


     )



}
