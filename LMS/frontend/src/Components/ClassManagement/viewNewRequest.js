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
            <div className ="container" style={{marginLeft:550, marginTop:80}}>
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
            
        )
    
        }
}

