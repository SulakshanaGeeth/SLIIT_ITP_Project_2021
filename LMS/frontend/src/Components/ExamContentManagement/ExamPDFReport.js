import React, { useState, useEffect } from "react";
import axios from "axios";
import jsPDF from 'jspdf';
import react from 'react';

class ExamPDFReport extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            contents: [],
            currentDateTime: Date().toLocaleString()
        }

        
        
    }
   

    
  componentDidMount(){
    this.retrieveContent();
  }


  retrieveContent(){
    axios.get("/content/").then (res =>{

    if(res.data.success){

      this.setState({
        contents:res.data.existingContents
      });

      console.log(this.state.contents)


    }
  

    })
  }  
    


    
  ExamPDFReport=()=>{

    
    var doc = new jsPDF('landscape','px','a1','false');
    doc.html(document.querySelector("#contents"),{

      callback: function(pdf){
        
      var PageCount = doc.internal.getNumberOfPages();
      pdf.deletePage(PageCount);
        

        
        pdf.save("ExamReport.pdf");
      }

    });

  };

    

render(){
    return(
      <div style={{minHeight: "80vh"}}>
<center>
<h1>Exam Content PDF Report</h1>
</center>
        <div id="contents">

        <table className = "table">
          
          <thead class="thead-dark">
          <tr class="bg-info">

              <th scope="col">Number</th>
              <th scope="col">Exam</th>
              <th scope="col">Title</th>
              <th scope="col">Subtitle</th>
              <th scope="col">Description</th>

            </tr>

          </thead>

          <tbody>
          {this.state.contents.map((contents, index) =>(

            <tr key = {index}>

                 <th scope="row">{index+1}</th>
                 
                 <td class="table-light">

                     <a>

                     {contents.ExamName}

                     </a>

                     </td> 
                     <td >{contents.LectureTitle}</td>

                 <td >{contents.Subtitle}</td> 
                  <td>
                  {contents.LectureDescription}

                  </td>

            </tr>

          ))}


          </tbody>
        </table>

            <h3>This Report is Generated on { this.state.currentDateTime } </h3>
            <h4>All Rights Reserved @ 2021 Imax Institute pvt ltd.</h4>


      </div>
      <div><button onClick={this.ExamPDFReport} type="btn btn-primary" >Download pdf</button></div>
      </div>
     
     ) }
}
export default ExamPDFReport ;