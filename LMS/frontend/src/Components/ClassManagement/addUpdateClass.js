import React,{Component} from "react";
import axios from "axios";

export default class NewClassRequestDetails extends Component{

    constructor(props){
        super(props);
        this.state={
            class_name:"",
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
        const {class_name,subject,grade,type,fee,day,start_time,end_time,status,no_of_students} = this.state;

        const data ={
            class_name:class_name,
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

        axios.put(`http://localhost:3000/classes/update/${id}`,data).then((res) =>{
            if(res.data.success){
                alert("Class updated")
            }
        })
    }

    componentDidMount(){

        const id = this.props.match.params.id;

        axios.get(`http://localhost:3000/classes/class/${id}`).then((res) =>{
            if(res.data.success){
                this.setState({
                    class_name:res.data.classes.class_name,
                    subject:res.data.classes.subject,
                    grade:res.data.classes.grade,
                    type:res.data.classes.type,
                    fee:res.data.classes.fee,
                    day:res.data.classes.day,
                    start_time:res.data.classes.start_time,
                    end_time:res.data.classes.end_time,
                    status:res.data.classes.status,
                    no_of_students:res.data.classes.no_of_students
                });

            }
        });        

    }

    render(){
        return(
            <div className ="container" style={{paddingLeft:200}}><br></br>

                <h2>Update Class Details</h2><br></br>
                
                <form>

                    <div className="form-group">
                        <label for="className">Class Name</label>
                        <input type="text" className="form-control" name = "class_name" id="className"  placeholder="Enter class name" required
                        value={this.state.class_name}
                        onChange={this.handleInputChange} style={{width:700}}></input>
                    </div>

                    <div className="form-group">
                        <label for="className">Subject</label>
                        <input type="text" className="form-control" name = "subject" id="subject"  placeholder="Enter subject" required
                        value={this.state.subject}
                        onChange={this.handleInputChange} style={{width:700}}></input>
                    </div>

                    <div className="form-group">
                        <label for="grade">Grade</label>
                        <input type="number" className="form-control" name ="grade" id="grade"  placeholder="Enter class grade" required
                        value={this.state.grade}
                        onChange={this.handleInputChange} style={{width:700}}></input>
                    </div>

                    <div className="form-group">
                        <label for="type">Type</label>
                        <input type="text" className="form-control" name ="type" id="type"  placeholder="Enter class type" required
                        value={this.state.type}
                        onChange={this.handleInputChange} style={{width:700}}></input>
                    </div>

                    <div cclassNamelass="form-group">
                        <label for="fee">Fee</label>
                        <input type="number" className="form-control" name ="fee" id="fee"  placeholder="Enter class fee" required
                        value={this.state.fee}
                        onChange={this.handleInputChange} style={{width:700}}></input>
                    </div>

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

                    <div className="form-group">
                        <label for="startTime">Start Time</label>
                        <input type="text" className="form-control" name ="start_time" id="startTime"  placeholder="Enter class start time ex - 3:30 P.M." required
                        value={this.state.start_time}
                        onChange={this.handleInputChange} style={{width:700}}></input>
                    </div>

                    <div className="form-group">
                        <label for="endTime">End Time</label>
                        <input type="text" className="form-control" name ="end_time" id="endTime"  placeholder="Enter class end time ex - 5:30 P.M." required
                        value={this.state.end_time}
                        onChange={this.handleInputChange} style={{width:700}}></input>
                    </div>

                    <div className="form-group">
                        <input type="hidden" className="form-control" name ="status" id="status"  placeholder=""
                        value={this.state.status}
                        onChange={this.handleInputChange} ></input>
                    </div>

                    {/*<div className="form-group">
                        <input type="hidden" className="form-control" name ="no_of_students" id="no_of_students"  placeholder=""
                        value={this.state.no_of_students}
                        onChange={this.handleInputChange}></input>
                    </div>*/}

                    
            
                <div>
                    <button type="submit" className="btn btn-primary" onClick={this.onsubmit} style={{marginTop:5, marginBottom:30}}>Update Class</button>
                </div>

                </form>

            </div>
        )
    }

}
