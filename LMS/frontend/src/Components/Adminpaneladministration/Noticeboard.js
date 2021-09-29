import React,{useState,useEffect} from "react";
import axios from "axios";
import "./Edit.css"





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

    

     return(
     <div className="container">

         <h1 style={{color:"red"}}>All Notices</h1>
         <ul>
                {notices.map(item => (
                    <li Notice_no={item.Notice_no}>
                        <h1>{item.Notice_no}</h1>
                        <h1>{item.massege}</h1>
                        <h1>{item.date}</h1>
                     

                       
                        
                    </li>
                ))}
                </ul>
           
     </div>


     )



}
