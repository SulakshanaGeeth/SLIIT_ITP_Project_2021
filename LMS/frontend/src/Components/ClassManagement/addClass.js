import React,{Component} from "react";
import axios from "axios";

export default class Addclass extends Component{

    constructor(props){
        super(props);

        var id = localStorage.getItem('teacherID');
        var name = localStorage.getItem('teacherName');
        console.log(name);

        this.state={
            class_name:"",
            teacher_id:id,
            teacher_name:name,
            subject:"",
            grade:"",
            type:"",
            fee:"",
            day:"",
            start_time:"",
            end_time:"",
            status:"Pending",
            no_of_students:"0",
            reason:"No reason added",
            nameError:"",
            subjectError:"",
            gradeError:"",
            typeError:"",
            feeError:"",
            dayError:"",
            startTimeError:"",
            endTimeError:""
        }
    }

    handleInputChange = (e) =>{
        const{name,value} = e.target;

        this.setState({
            ...this.state,
            [name]:value
        })
    }

    validate = () =>{
        let nameError = "";
        let subjectError = "";
        let gradeError = "";
        let typeError = "";
        let feeError = "";
        let dayError = "";
        let startTimeError = "";
        let endTimeError = "";

        if(!this.state.class_name){
            nameError = 'Enter the name';
        }

        if(!this.state.subject){
            subjectError = 'Enter the subject';
        }

        if(!this.state.grade){
            gradeError = 'Enter the grade';
        }

        if(!this.state.type){
            typeError = 'Enter the type';
        }

        if(!this.state.fee){
            feeError = 'Enter the fee';
        }

        if(!this.state.day){
            dayError = 'Select the day';
        }

        if(!this.state.start_time.includes(':')){
            startTimeError = 'invalid time format';
        }

        if(!this.state.start_time){
            startTimeError = 'Enter the start time';
        }

        if(!this.state.end_time.includes(':')){
            endTimeError = 'invalid time format';
        }

        if(!this.state.end_time){
            endTimeError = 'Enter the end time';
        }

        if(nameError || subjectError || gradeError || typeError || feeError || dayError || startTimeError || endTimeError){
            this.setState({nameError, subjectError, gradeError, typeError, feeError, dayError, startTimeError, endTimeError});
            return false;
        }

        return true;
    };

    onsubmit = (e) =>{

        e.preventDefault();
        const isValid = this.validate();
        if(isValid){
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
                reason:reason,
            }

            console.log(data)

            axios.post(`http://localhost:3000/newclassrequest/save`,data).then((res) =>{
                if(res.data.success){
                    alert("Request Sent")
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
                            status:"Pending",
                            no_of_students:"0",
                            reason:"No reason added",
                            nameError:"",
                            subjectError:"",
                            gradeError:"",
                            typeError:"",
                            feeError:"",
                            dayError:"",
                            startTimeError:"",
                            endTimeError:""
                        }
                    )
                }
            })
        }
    }

   


    render(){
        return(
            <div className ="container" style={{paddingLeft:200}}><br></br>

                <h2>Add New Class</h2><br></br>

                <form>

                    <div className="form-group">
                        <label for="className">Class Name</label>
                        <input type="text" className="form-control" name = "class_name" id="className"  placeholder="Enter class name" required
                        value={this.state.class_name}
                        onChange={this.handleInputChange} style={{width:700}}></input>
                    </div>

                    <div style={{color:"red"}}>{this.state.nameError}</div>

                    <div className="form-group">   
                        <input type="hidden" className="form-control" name = "teacher_id" id="teacher_id"  placeholder="Enter teacher_id" required
                        value={this.idd}
                        onChange={this.handleInputChange} style={{width:700}}></input>
                    </div>

                    <div className="form-group"> 
                        <input type="hidden" className="form-control" name = "teacher_name" id="teacher_name"  placeholder="Enter teacher_name" required
                        value={this.state.teacher_name}
                        onChange={this.handleInputChange} style={{width:700}}></input>
                    </div>

                    <div className="form-group">
                        <label for="className">Subject</label>
                        <input type="text" className="form-control" name = "subject" id="subject"  placeholder="Enter subject" required
                        value={this.state.subject}
                        onChange={this.handleInputChange} style={{width:700}}></input>
                    </div>

                    <div style={{color:"red"}}>{this.state.subjectError}</div>

                    <div className="form-group">
                        <label for="grade">Grade</label>
                        <input type="number" className="form-control" name ="grade" id="grade"  placeholder="Enter class grade" required
                        value={this.state.grade}
                        onChange={this.handleInputChange} style={{width:700}}></input>
                    </div>

                    <div style={{color:"red"}}>{this.state.gradeError}</div>

                    <div className="form-group">
                        <label for="type">Type</label>
                        <input type="text" className="form-control" name ="type" id="type"  placeholder="Enter class type" required
                        value={this.state.type}
                        onChange={this.handleInputChange} style={{width:700}}></input>
                    </div>

                    <div style={{color:"red"}}>{this.state.typeError}</div>

                    <div className="form-group">
                        <label for="fee">Fee</label>
                        <input type="number" className="form-control" name ="fee" id="fee"  placeholder="Enter class fee" required
                        value={this.state.fee}
                        onChange={this.handleInputChange} style={{width:700}}></input>
                    </div>

                    <div style={{color:"red"}}>{this.state.feeError}</div>

                    <div className="form-group">
                        <div><label className="mr-sm-2" for="inlineFormCustomSelect">Day</label></div>
                        <select className="custom-select mr-sm-2" name ="day" id="inlineFormCustomSelect" required
                        value={this.state.day}
                        onChange={this.handleInputChange} style={{width:700}}>
                            <option selected>Choose...</option>
                            <option value="Monday">Monday</option>
                            <option value="Tuesday">Tuesday</option>
                            <option value="Wensday">Wensday</option>
                            <option value="Thursday">Thursday</option>
                            <option value="Friday">Friday</option>
                        </select>
                    </div>

                    <div style={{color:"red"}}>{this.state.dayError}</div>

                    <div className="form-group">
                        <label for="startTime">Start Time</label>
                        <input type="text" className="form-control" name ="start_time" id="startTime"  placeholder="Enter class start time ex - 3:30 P.M." required
                        value={this.state.start_time}
                        onChange={this.handleInputChange} style={{width:700}}></input>
                    </div>

                    <div style={{color:"red"}}>{this.state.startTimeError}</div>

                    <div className="form-group">
                        <label for="endTime">End Time</label>
                        <input type="text" className="form-control" name ="end_time" id="endTime"  placeholder="Enter class end time ex - 5:30 P.M." required
                        value={this.state.end_time}
                        onChange={this.handleInputChange} style={{width:700}}></input>
                    </div>

                    <div style={{color:"red"}}>{this.state.endTimeError}</div>

                    <div className="form-group">
                        <input type="hidden" className="form-control" name ="status" id="status"  placeholder=""
                        value={this.state.status}
                        onChange={this.handleInputChange}></input>
                    </div>

                    <div className="form-group">
                        <input type="hidden" className="form-control" name ="no_of_students" id="no_of_students"  placeholder=""
                        value={this.state.no_of_students}
                        onChange={this.handleInputChange}></input>
                    </div>

                    <div className="form-group">
                        <input type="hidden" className="form-control" name = "reason" id="reason"  placeholder="Enter class name" required
                        value={this.state.reason}
                        onChange={this.handleInputChange}></input>
                    </div>

                <button type="submit" className="btn btn-primary" onClick={this.onsubmit} style={{marginTop:5, marginBottom:30}}>Send Request</button>
                </form>
            </div>
        )
    }
}
