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

        axios.put(`http://localhost:8070/newclassrequest/update/${id}`,data).then((res) =>{
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

        axios.get(`http://localhost:8070/newclassrequest/post/${id}`).then((res) =>{
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
            <div className ="container"><br></br>
            
            
            <form>

                {/*<div class="form-group">
                    <label for="className">Class Name</label>
                    <input type="hidden" class="form-control" name = "class_name" id="className"  placeholder="Enter class name" required
                    value={this.state.class_name}
                    onChange={this.handleInputChange}></input>
                </div>

                <div class="form-group">
                    <label for="className">Subject</label>
                    <input type="text" class="form-control" name = "subject" id="subject"  placeholder="Enter subject" required
                    value={this.state.subject}
                    onChange={this.handleInputChange}></input>
                </div>

                <div class="form-group">
                    <label for="grade">Grade</label>
                    <input type="hidden" class="form-control" name ="grade" id="grade"  placeholder="Enter class grade" required
                    value={this.state.grade}
                    onChange={this.handleInputChange}></input>
                </div>

                <div class="form-group">
                    <label for="type">Type</label>
                    <input type="hidden" class="form-control" name ="type" id="type"  placeholder="Enter class type" required
                    value={this.state.type}
                    onChange={this.handleInputChange}></input>
                </div>

                <div class="form-group">
                    <label for="fee">Fee</label>
                    <input type="hidden" class="form-control" name ="fee" id="fee"  placeholder="Enter class fee" required
                    value={this.state.fee}
                    onChange={this.handleInputChange}></input>
                </div>

                <div class="form-group">
                    <label class="mr-sm-2" for="inlineFormCustomSelect">Day</label>
                    <select class="custom-select mr-sm-2" name ="day" id="inlineFormCustomSelect" required
                    value={this.state.day}
                    onChange={this.handleInputChange}>
                        <option selected>Choose...</option>
                        <option value="Monday">Monday</option>
                        <option value="Tuesday">Tuesday</option>
                        <option value="Wensday">Wensday</option>
                        <option value="Thursday">Thursday</option>
                        <option value="Friday">Friday</option>
                    </select>
                </div>

                <div class="form-group">
                    <label for="startTime">Start Time</label>
                    <input type="hidden" class="form-control" name ="start_time" id="startTime"  placeholder="Enter class start time ex - 3:30 P.M." required
                    value={this.state.start_time}
                    onChange={this.handleInputChange}></input>
                </div>

                <div class="form-group">
                    <label for="endTime">End Time</label>
                    <input type="hidden" class="form-control" name ="end_time" id="endTime"  placeholder="Enter class end time ex - 5:30 P.M." required
                    value={this.state.end_time}
                    onChange={this.handleInputChange}></input>
                </div>*/}

                <div class="form-group">
                    <label for="className">Reason</label>
                    <input type="text" class="form-control" name = "reason" id="reason"  placeholder="Enter reason" required
                    value={this.state.reason}
                    onChange={this.handleInputChange}></input>
                </div>

                <div class="form-group">
                    <input type="hidden" class="form-control" name ="status" id="status"  placeholder=""
                    value={this.state.status}
                    onChange={this.handleInputChange}></input>
                </div>

                <div class="form-check form-check-inline">
                    <input class="form-check-input" type="checkbox" name="status"  id="status" value="Rejected" required
                    onChange={this.handleInputChange}></input>
                    <label class="form-check-label" for="inlineCheckbox1">Reject</label>
                </div>

                {/*<div class="form-group">
                    <input type="hidden" class="form-control" name ="no_of_students" id="no_of_students"  placeholder=""
                    value={this.state.no_of_students}
                    onChange={this.handleInputChange}></input>
                </div>*/}

                
        
            <div><br></br><button type="submit" class="btn btn-primary" onClick={this.onsubmit}>Confirm</button></div>
        </form>
        </div>
        )
    }

}
