import React,{useState,useEffect} from "react";
import axios from "axios";
//import "./AllNotices.css";
import jsPDF from 'jspdf';

const initialState = {
    massege: "",
    date: "",
    
  };



export default function GetReport(props){
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

    
    function pdfGenerate(){
      var doc = new jsPDF('landscape','px','a1','false');
      doc.html(document.querySelector("#Notices"),{
        callback: function(pdf){
          pdf.save("mypdf.pdf");
        }
      });
    };

     return(
     <div className="container">
          
          <div class="content">
              
         

         <h1 style={{color:"red",display: 'flex',  justifyContent:'center', alignItems:'center', height: '100vh'}}  > All Notices</h1>
         <div className="box1">
          <table className="withdraw-table">
            <thead>
              <tr>
                                
                <td>Massege</td>
                <td>Date</td>
                <td>PDF</td>
               
              </tr>
            </thead>
  
            <tbody>
              {notices.map((item)=> (
                <tr>
                
                 
                  <td>{item.massege}</td>
                  <td>{item.date}</td>

                       
                    <td> {<button type="button" className="btn btn-success mr-2 mb-4" button onClick={pdfGenerate}>Download pdf</button>}</td>  
         
                    </tr>  
                 ))}   
                 </tbody>
                 </table>
                
           
     </div>
     </div>
     </div>
    
     


     )



}
