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
            status:"",
            no_of_students:"0",
            reason:""
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
        const {class_name,teacher_id,teacher_name,subject,grade,type,fee,day,start_time,end_time,status,no_of_students,reason} = this.state;

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
            no_of_students:no_of_students,
            reason:reason
        }

        console.log(data)

        axios.put(`http://localhost:3000/newclassrequest/update/${id}`,data).then((res) =>{
            if(res.data.success){
                alert("Request Rejected")
                this.setState(
                    {
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
                        status:"",
                        no_of_students:"0",
                        reason:""
                    }
                )
            }
        })
    }

    componentDidMount(){

        const id = this.props.match.params.id;

        axios.get(`http://localhost:3000/newclassrequest/post/${id}`).then((res) =>{
            if(res.data.success){
                this.setState({
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
                    no_of_students:res.data.newclassrequests.no_of_students,
                    reason:res.data.newclassrequests.reason
                });
            }
        });        
    }

    render(){
        return(
            <div className ="container" style={{marginTop:130}}>
                <div className="card bg-secondary mb-3" style={{maxWidth:1000, maxHeight:320, paddingLeft:100, paddingTop:50, paddingRight:10, marginLeft:70}}>
                    <div className="card-body">
            
                        <form>

                            <div className="form-group">
                                <label for="className">Reason</label>
                                <input type="text" className="form-control" name = "reason" id="reason"  placeholder="Enter reason" required
                                value={this.state.reason}
                                onChange={this.handleInputChange} style={{width:750}}></input>
                            </div>

                            <div className="form-group">
                                <input type="hidden" className="form-control" name ="status" id="status"  placeholder=""
                                value={this.state.status}
                                onChange={this.handleInputChange}></input>
                            </div>

                            <div className="form-check form-check-inline">
                                <input className="form-check-input" type="checkbox" name="status"  id="status" value="Rejected" required
                                onChange={this.handleInputChange}></input>
                                <label className="form-check-label" for="inlineCheckbox1">Reject</label>
                            </div>
                    
                            <div>
                                <br></br><button type="submit" className="btn btn-primary" onClick={this.onsubmit}>Confirm</button><br/><br/><br/>
                            </div>

                        </form>
                
                    </div>
                </div>
                <br/><br/><br/><br/><br/>
            </div>
        )
    }

}
