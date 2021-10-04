import React,{Component} from "react";
import axios from "axios";

export default class ViewNewClassRequest extends Component{
    constructor(props){
        super(props);

        this.state={
            newclassrequests:{}
        };
    }

    componentDidMount(){

        const id = this.props.match.params.id;

        axios.get(`http://localhost:3000/newclassrequest/post/${id}`).then((res) =>{
           if(res.data.success){
                this.setState({
                     newclassrequests:res.data.newclassrequests
                 });
             }
        });        
    }

    render(){

        const {class_name,subject,grade,type,fee,day,start_time,end_time,status,reason} = this.state.newclassrequests;

        return(
            <div className = "container" style={{minHeight:"80vh"}}>
                <br />
                    
                <div style={{paddingLeft:280}}>
                    <br />

                    <a className="btn btn-dark" href="/teacher/classes" role="button">Classes</a>&nbsp; 
                    <a className="btn btn-dark" href="/teacher/save" role="button">Add New Class</a>&nbsp; 
                    <a className="btn btn-dark" href="/teacher/teacher/newClassRequests" role="button">Class Request</a>&nbsp; 
                    <a className="btn btn-dark" href="/WithdrawHome" role="button">Payment</a>&nbsp; 
                    <a className="btn btn-dark" href="/teacher/classDetailsReport" role="button">Class Details</a>
                    <br /><br />
                    
                </div>
                <br />

                <div className="card bg-secondary mb-3" style={{maxWidth:600, maxHeight:470, paddingLeft:140, paddingTop:50, paddingRight:10, marginLeft:250}}>
                    <div className="card-body">
                        <div >
                            <h2>{class_name}</h2><br></br>
                            <h5>Subject - {subject}</h5>
                            <h5>Grade - {grade}</h5>
                            <h5>Type - {type}</h5>
                            <h5>Fee - {fee}</h5>
                            <h5>Day - {day}</h5>
                            <h5>Start time - {start_time}</h5>
                            <h5>End time - {end_time}</h5>
                            <h5>Status - {status}</h5>
                            <h5>Reason - {reason}</h5>
                        </div>
                        <br /><br /><br /><br /><br /><br /><br />
                    </div>
                </div>
            </div>
         
        )
        
    }
}

