import React, {Component} from 'react';
import axios from 'axios';

export default class ExamStudentView extends Component {



    render(){

        return(
            <div style={{minHeight: "80vh"}}> 
                <img src ="/images/stud.png" alt=""/>
                <center>
                
                {/* <h2>Welcome to Imax Institute Students Section</h2> */}
                </center>
                <br/>
               
                <h2>Please Select Your Preference</h2>

                    <center>
                    <br></br>
                    <br></br>
                    <a href="/ExamSelectionPage" class="exambutton2" role="button" >Government Exams</a>
                    <br></br>
                    <br></br>
                    <a href="/teacher/classes" class="exambutton2" role="button " >Classes</a>
                    <br></br>
                    <br></br>
                    <a href="/forumhome" class="exambutton2" role="button" >Student Forum</a>
                    <br></br>
                    <br></br>
                    <a href="/notieboard"  class="exambutton2" role="button" >Notice Board</a>
                    <br></br>
                    <br></br>
                    <a href="/freeCard/add"  class="exambutton2" role="button" >Special Requests</a>
                    <br></br>
                    <br></br>   

                    </center>

            </div>
        )
    }



}




