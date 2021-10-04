import React,{Component} from "react";
import axios from "axios";

export default class NewClassRequestDetails extends Component{

    constructor(props){
        super(props);



        this.state={
            class_name:"",
            teacher_id:"",
            teacher_name:"",
            subject:"",
            grade:"",
            type:"",
            fee:"",
            day:"",
            start_time:"",
            end_time:"",
            status:"Accepted",
            no_of_students:"0"
        }
    }

    handleInputChange = (e) =>{
        const{name,value} = e.target;

        this.setState({
            ...this.state,
            [name]:value
        })
    }

    onsubmit = (e) =>{

        e.preventDefault();
        const id = this.props.match.params.id;
        const {class_name,teacher_id,teacher_name,subject,grade,type,fee,day,start_time,end_time,status,no_of_students} = this.state;

        const data ={
            class_name:class_name,
            teacher_id:teacher_id,
            teacher_name:teacher_name,
            subject:subject,
            grade:grade,
            type:type,
            fee:fee,
            day:day,
            start_time:start_time,
            end_time:end_time,
            status:status,
            no_of_students:no_of_students
        }

        console.log(data)

        axios.put(`http://localhost:3000/newclassrequest/update/${id}`,data).then((res) =>{
        if(res.data.success){
         }
       })

       axios.post(`http://localhost:3000/classes/save`,data).then((res) =>{
        if(res.data.success){
            alert("Class Added")
         }
       })

    }

    componentDidMount(){

        const id = this.props.match.params.id;

        axios.get(`http://localhost:3000/newclassrequest/post/${id}`).then((res) =>{
            if(res.data.success){
                this.setState({
                    _id:res.data.newclassrequests._id,
                    class_name:res.data.newclassrequests.class_name,
                    teacher_id:res.data.newclassrequests.teacher_id,
                    teacher_name:res.data.newclassrequests.teacher_name,
                    subject:res.data.newclassrequests.subject,
                    grade:res.data.newclassrequests.grade,
                    type:res.data.newclassrequests.type,
                    fee:res.data.newclassrequests.fee,
                    day:res.data.newclassrequests.day,
                    start_time:res.data.newclassrequests.start_time,
                    end_time:res.data.newclassrequests.end_time,
                    status:res.data.newclassrequests.status,
                    no_of_students:res.data.newclassrequests.no_of_students
                });

            }
        });        

    }
    

    render(){
        return(
            <div className ="container" style={{marginTop:50, minHeight:"80vh"}}><br></br>
                <div className="card bg-secondary mb-3" style={{maxWidth:600, maxHeight:500, paddingLeft:140, paddingTop:50, paddingRight:10, marginLeft:250}}>
                    <div className="card-body">
                        <h2>{this.state.class_name}</h2>
                        <h6>Teacher - {this.state.teacher_name}</h6>
                        <h6>Subject - {this.state.subject}</h6>
                        <h6>Grade - {this.state.grade}</h6>
                        <h6>Type - {this.state.type}</h6>
                        <h6>Fee - {this.state.fee}</h6>
                        <h6>Day - {this.state.day}</h6>
                        <h6>Start time - {this.state.start_time}</h6>
                        <h6>End time - {this.state.end_time}</h6>
                        
                        <form>

                            <div className="form-group">
                                <input type="hidden" className="form-control" name ="status" id="status"  placeholder=""
                                value={this.state.status}
                                onChange={this.handleInputChange}></input>
                            </div>

                            <div className="form-check form-check-inline">
                                <input className="form-check-input" type="checkbox" name="status"  id="status" value="Accepted" 
                                onChange={this.handleInputChange}></input>
                                <label className="form-check-label" for="inlineCheckbox1">Accept</label>
                            </div>
                                    
                            <br></br>
                            <button type="submit" className="btn btn-primary" onClick={this.onsubmit} style={{marginTop:20, marginBottom:20}}>Add Class</button><br></br>
                            <a href = {`/teacher/rejectNewClass/${this.state._id}`} className="redClasses">Reject Request</a><br/><br/><br/><br/>
                        </form>
                    </div>
                </div>
            </div>
        )
    }

}
