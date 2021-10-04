import React, {Component} from 'react'
import axios from 'axios'



export default class EditContent extends Component {


  constructor(props){
    super(props);
    this.state={
      
      ExamName:"",
      LectureTitle:"",
      Subtitle:"",
      LectureDescription:"",
      MeetingLink:"",
      ReferLink:""
         


    }

  }
  

  handleInputChange = (e) =>{

    const {name,value} = e.target;

    this.setState({

      ...this.state,
      [name]:value

    })


  }

  onSubmit = (e) =>{
    

    e.preventDefault();
    const id = this.props.match.params.id;

    const {ExamName,LectureTitle,Subtitle,LectureDescription,MeetingLink,ReferLink} = this.state;

    const data ={
      
      ExamName:ExamName,
      LectureTitle:LectureTitle,
      Subtitle:Subtitle,
      LectureDescription:LectureDescription,
      MeetingLink:MeetingLink,
      ReferLink:ReferLink

    }
    console.log(data)

    axios.put(`http://localhost:3000/content/update/${id}`,data).then((res) =>{

      if(res.data.success){
        alert("Content Updated Successfully.!")
        this.setState(
          {
          ExamName:"",
          LectureTitle:"",
          Subtitle:"",
          LectureDescription:"",
          MeetingLink:"",
          ReferLink:""
          }
        )
        
      }

    })


  }



  componentDidMount(){

    const id = this.props.match.params.id;

    axios.get(`/content/${id}`).then((res) =>{
      if(res.data.success){
        this.setState({
          ExamName:res.data.content.ExamName,
          LectureTitle:res.data.content.LectureTitle,
          Subtitle:res.data.content.Subtitle,
          LectureDescription:res.data.content.LectureDescription,
          MeetingLink:res.data.content.MeetingLink,
          ReferLink:res.data.content.ReferLink,
        })
      }

      if(res.data.success){

        this.setState({

          content:res.data.content

        });

        console.log(this.state.content);

      }

    });
  }
  

  render(){

    return (
      <div  class="container">
      {/* <div>
<img src ="/images/exm2.png" alt=""/>
</div > */}
<center>






<h1>Update Exam Content</h1>
</center>
<div style={{paddingLeft:200}}> <div class=" text-center mt-5 ">
  
  </div>
  <div class="form-group"> <label for="form_need">Please Specify The Exam Type*</label> 
  <form class="cls1">

  <select style={{width:700}} class="form-select" aria-label="Default select example" placeholder="name@example.com" value={this.state.ExamName} name="ExamName" onChange= {this.handleInputChange}>
    
    <option selected>Select The Preffered Examination</option>
    <option value="Sri Lanka Administrative Services(SLAS)">Sri Lanka Administrative Services (SLAS)</option>
    <option value="Banking Exams(IABF/DABF)">Banking Exams(IABF/DABF)</option>
    <option value="Sri Lanka Education Administrative Services(SLEAS)">Sri Lanka Education Administrative Services (SLEAS)</option>
    <option value="Sri Lanka Accountants Services(SLACS)">Sri Lanka Accountants Services (SLACS)</option>
  </select>
  <br/>

  <div className="cls1">
    <label style= {{marginBottom:'5px'}}>Lecture Title</label>
    <input style={{width:700}} type="text" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" required="required" data-error="Firstname is required." value={this.state.LectureTitle} name="LectureTitle" onChange= {this.handleInputChange} />
  </div>
  <br/>
 

      <div class="cls1">
        <label for="formGroupExampleInput4" className="form-label">Subtitle</label>
        <input style={{width:700}} type="text" className="form-control" id="textinput2" value={this.state.Subtitle} name="Subtitle" onChange= {this.handleInputChange}/>
        <br/>
        


  </div>
    <div className="cls1">

    <label for="exampleFormControlTextarea1" className="form-label">Lecture Description</label>
    <textarea style={{width:700}} className="form-control" id="exampleFormControlTextarea1" rows="3" value={this.state.LectureDescription} name="LectureDescription" onChange= {this.handleInputChange} ></textarea>
    <br></br>
    </div>
    

  </form>

  <div class="cls1">
<label for="formGroupExampleInput4">Online Meeting Link</label>
<input style={{width:700}} type="text" class="form-control" id="formGroupExampleInput4" placeholder="" value={this.state.MeetingLink} name="MeetingLink" onChange= {this.handleInputChange}/>
  </div>

  <br></br>

  <div class="cls1">
<label for="formGroupExampleInput4">Reference Link</label>
<input style={{width:700}} type="text" class="form-control" id="formGroupExampleInput5" placeholder="" value={this.state.ReferLink} name="ReferLink" onChange= {this.handleInputChange}/>
  </div>
          
  <div class="cls1">
    <br></br>
    <button  type="submit" class="btn btn-primary" href="/ExamContent" style = {{marginTop: '15px' }} onClick={this.onSubmit} >Update</button>
    
    </div>
          
          </div>
          </div>
          </div>
 

  )
  }
}