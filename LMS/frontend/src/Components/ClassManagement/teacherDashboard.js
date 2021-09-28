import React,{Component} from "react";
import axios from "axios";

export default class Classes extends Component{
    constructor(props){
        super(props);

        

        this.state={
            classes:[]
        };
    }

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


   




    onDelete = (id) => {
        axios.delete(`http://localhost:3000/classes/delete/${id}`).then((res) =>{
            alert("Deleted Successfully");
            this.retrieveRequests();
        })
    }

    render(){
        return(
            <div className ="container"><br></br>

                <div style={{paddingLeft:250}}>
                <br />

                    <a class="btn btn-dark" href="/teacher/classes" role="button">Classes</a>&nbsp; 
                    <a class="btn btn-dark" href="/teacher/save" role="button">Add New Class</a>&nbsp; 
                    <a class="btn btn-dark" href="/teacher/teacher/newClassRequests" role="button">Class Request</a>&nbsp; 
                    <a class="btn btn-dark" href="/WithdrawHome" role="button">Payment</a>&nbsp; 
                    <a class="btn btn-dark" href="#" role="button">Class Details</a>

                <br /><br />
                
                </div>
                <br />
                <span class="border-left-0"> 
                <h2 style={{fontSize: "40px",paddingLeft:450}}>Classes</h2><br></br>

                {this.state.classes.map((classes,index) =>(

                            <div style={{paddingLeft:250}}>
                                <br></br> 
                                <h3 class="card-text">
                                   
                                   <a href = {`/content/class/${classes._id}`}>{classes.class_name}</a>
                                    
                                </h3>

                                <a href ={`/teacher/addUpdateRequest/${classes._id}`} >Edit </a>
                                <a href = "#" onClick ={() => this.onDelete(classes._id)}>Remove</a>

                                <br></br>

                               

                            </div>
                           
                            
                        ))}
                
                </span>
                <br /><br /><br />
                
            </div>
        )
    }
}




