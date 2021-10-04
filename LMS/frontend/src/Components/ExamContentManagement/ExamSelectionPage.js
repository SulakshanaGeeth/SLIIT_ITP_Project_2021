import React, {Component} from 'react';
import axios from 'axios';

export default class ExamSelectionPage extends Component {




    render(){

        return(
            <div>

                <img src ="/images/exhome3.png" alt=""/>
               
                <h2 style={{marginLeft:20}}>Please Select Your Preference</h2>
               <a href="/SLAS"> <img src="/images/1.png" style={{width:200,height:200, marginLeft:630, marginTop:50}}  class="rounded" alt="..."></img> </a>
               
               <a href="/teacher/classes"> <img src="/images/2.png" style={{width:200,height:200, marginLeft:50, marginTop:50}} class="rounded" alt="..."></img></a>

                <div style={{ marginLeft:635, marginTop:20}} class="btn-group" role="group" aria-label="Basic example">
                <a href="/SLAS" ><button type="button" class="btn btn-secondary">View Content</button></a>
                <a href="#" ><button type="button" class="btn btn-secondary">Enroll</button></a>
                </div>

                <div style={{marginLeft:80, marginTop:20}} class="btn-group" role="group" aria-label="Basic example">
                <a href="/SLAS" ><button type="button" class="btn btn-secondary">View Content</button></a>
                <a href="#" > <button type="button" class="btn btn-secondary">Enroll</button></a>

                </div>
                <a href="/GovExamHome"> <img src="/images/3.png" style={{width:200,height:200, marginLeft:630, marginTop:50}}  class="rounded" alt="..."></img> </a>
               
               <a href="/SLEAS"> <img src="/images/4.png" style={{width:200,height:200, marginLeft:50, marginTop:50}} class="rounded" alt="..."></img></a>

                <div style={{ marginLeft:635, marginTop:20}} class="btn-group" role="group" aria-label="Basic example">
                <a href="/SLEAS" ><button type="button" class="btn btn-secondary">View Content</button></a>
                <a href="#" > <button type="button" class="btn btn-secondary">Enroll</button></a>
                </div>

                <div style={{marginLeft:80, marginTop:20}} class="btn-group" role="group" aria-label="Basic example">
                <a href="#" ><button type="button" class="btn btn-secondary">View Content</button></a>
                <a href="#" > <button type="button" class="btn btn-secondary">Enroll</button></a>

                </div>

                <br/>
                <br/>
                    

                   


            
            

                
                



            </div>
        )
    }
}