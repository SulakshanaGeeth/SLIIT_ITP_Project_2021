import React, {Component} from 'react'
import axios from 'axios';



export default class GovExamHome extends Component {

  render(){

    return (
        <div  style={{minHeight: "80vh"}}>
             
             <img src ="/images/exhome3.png" alt=""/>
            
                <center>
                <br></br>
                    <h1>Government Examination Unit</h1>
                    </center>

                    <br></br>
                    <br></br>
                    <h2>Please Select Your Preference</h2>

                    <center>
                    <br></br>
                    <br></br>
                    <a href="/ExamAdd" class="exambutton" role="button" >Add Examination Content</a>
                    <br></br>
                    <br></br>
                    <a href="/ExamContent" class="exambutton" role="button " >View Recenlty Added Content</a>
                    <br></br>
                    <br></br>
                    <a href="/ExamSelectionPage" class="exambutton" role="button" >Visit Government Examination Page</a>
                    <br></br>
                    <br></br>
                    <a href="/ExamReport"  class="exambutton" role="button" >Generate a Report</a>
                    <br></br>
                    <br></br>   

                    </center>

                    <br></br>
                    <br></br>   
                    <br></br>
                    <br></br>   
                    <br></br>
                    <br></br>   
                   
                  

                        
                       
                        
                        
                       
                                    
               
                

                
                
</div>
     

      
    )
  }
}