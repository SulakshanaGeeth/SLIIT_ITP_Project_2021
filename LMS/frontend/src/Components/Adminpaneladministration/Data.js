import React,{useState,useEffect} from "react";
import axios from "axios";
//import "./AllNotices.css";
import jsPDF from 'jspdf';

const initialState = {
    massege: "",
    date: "",
    
  };



export default function GetReport(props){
  const Notice_no = props.match.params.id;

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
      var doc = new jsPDF('landscape','px','a2','false');
      doc.html(document.querySelector("#Notices"),{
        callback: function(pdf){
          pdf.save("mypdf.pdf");
        }
      });
    };

     return(
     <div className="container" id="Notices">
           <div class="content">
          
         
              
         

         <h1 style={{color:"red",display: 'flex',  justifyContent:'center', alignItems:'center', height: '100vh'}}  > All Notices</h1>
         <div className="box1">
          <table className="withdraw-table">
            <thead>
              <tr>
                              
                <td>Massege</td>
                <td>Date</td>
               
               
              </tr>
            </thead>
  
            <tbody>
              {notices.map((item)=> (
                <tr>
                  
                  <td>{item.massege}</td>
                  <td>{item.date}</td>
                  
                  </tr>  
                 
                  
                
                       
                  
         
                    
                 ))}   
                 </tbody>
                 </table>
                 <button type="button" className="btn btn-danger" 
                  onClick={ pdfGenerate}>Download pdf</button>
           
     </div>
     </div>
     </div>
     
    
     


     )



}
