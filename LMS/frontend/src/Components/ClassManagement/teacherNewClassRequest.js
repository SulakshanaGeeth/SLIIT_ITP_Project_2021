import React,{Component} from "react";
import axios from "axios";

export default class Requests extends Component{
    constructor(props){
        super(props);

        this.state={
            newclassrequests:[]
        };
    }

    componentDidMount(){
        this.retrieveRequests();
    }

    retrieveRequests(){

        var id = localStorage.getItem('teacherID');
        console.log(id);
        axios.get(`http://localhost:3000/NewClassRequest/all/${id}`).then(res =>{
            if(res.data.success){
                this.setState({
                    newclassrequests:res.data.existingRequests 
                });

                console.log(this.state.posts)
            }
        })
    }

    onDelete = (id) => {
        axios.delete(`http://localhost:3000/NewClassRequest/delete/${id}`).then((res) =>{
            alert("Deleted Successfully");
            this.retrieveRequests();
        })
    }

    render(){
        return(
            <div className ="container" style={{minHeight:"80vh"}}><br></br>

                <div style={{paddingLeft:280}}>
                    <br />

                    <a className="btn btn-dark" href="/teacher/classes" role="button">Classes</a>&nbsp; 
                    <a className="btn btn-dark" href="/teacher/save" role="button">Add New Class</a>&nbsp; 
                    <a className="btn btn-dark" href="/teacher/teacher/newClassRequests" role="button">Class Request</a>&nbsp; 
                    <a className="btn btn-dark" href="/WithdrawHome" role="button">Payment</a>&nbsp; 
                    <a className="btn btn-dark" href="/teacher/classDetailsReport" role="button">Class Details</a>

                    <br /><br />
                </div>
                <br /><br />

                <h2>New Class Requests</h2><br></br>
                <table className="table">
                    <thead className="thead-dark">
                        <tr>
                            <th scope="col">No</th>
                            <th scope="col">Class Name</th>
                            <th scope="col" style = {{width: 250}}>Status</th>
                            <th scope="col" style={{textAlign: 'center'}}>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.newclassrequests.map((newclassrequests,index) =>(
                            <tr>
                                <th scope="row">{index+1}</th>
                                <td>{newclassrequests.class_name}</td>
                                <td>{newclassrequests.status}</td>
                                <td style={{textAlign: 'center'}}>
                                    <a href = {`/teacher/post/${newclassrequests._id}`} style={{paddingLeft:0}} className="blueClasses">View </a>
                                    <a href = "#" onClick ={() => this.onDelete(newclassrequests._id)} style={{paddingLeft:18}} className="redClasses">Remove </a>
                                </td>
                            </tr>
                        ))}

                    </tbody>
                </table>
                <br/><br/>
            </div>
        )
    }
}




