import React,{Component} from "react";
import axios from "axios";
import jsPDF from "jspdf";

export default class Classes extends Component{
    constructor(props){
        super(props);
    
        this.state={
            classes:[]
        };
    }

    generatePDF = () => {
        var doc = new jsPDF("l", "mm", [1120, 900]);
        doc.html(document.querySelector("#content"),{
            callback: function(pdf){
                pdf.save("ClassReport.pdf");
            }
        })
    };

    componentDidMount(){
        this.retrieveRequests();
    }

    retrieveRequests(){

        var id = localStorage.getItem('teacherID');
        console.log(id);
        axios.get(`http://localhost:3000/classes/all/${id}`).then(res =>{
            if(res.data.success){
                this.setState({
                    classes:res.data.existingRequests 
                });

                console.log(this.state.posts)
            }
        })
    }

    render(){
        return(
            <div className ="container"><br></br>
                <div id = "content">
                <br />
                <span class="border-left-0"> 
                <h2 style={{fontSize: "40px",paddingLeft:400}}>Class Report</h2><br></br>

                    <table class="table table-hover">
                    <thead class="thead-dark">
                        <tr>
                        <th scope="col">No</th>
                        <th scope="col">Class Name</th>
                        <th scope="col">Grade</th>
                        <th scope="col">Subject</th>
                        <th scope="col">Type</th>
                        <th scope="col">Fee</th>
                        <th scope="col">Day</th>
                        <th scope="col">Start Time</th>
                        <th scope="col">End time</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.classes.map((classes,index) =>(
                            <tr>
                                <th scope="row">{index+1}</th>
                                <td>{classes.class_name}</td>
                                <td>{classes.grade}</td>
                                <td>{classes.subject}</td>
                                <td>{classes.type}</td>
                                <td>{classes.fee}</td>
                                <td>{classes.day}</td>
                                <td>{classes.start_time}</td>
                                <td>{classes.end_time}</td>
                            </tr>
                        ))}
                        </tbody>
                        </table>

                        
                
                </span>
                
            </div>
            <button class="btn btn-primary" onClick={this.generatePDF} type = "primary" style={{marginLeft:950}}>Generate PDF</button>

            </div>
        )
    }
}




