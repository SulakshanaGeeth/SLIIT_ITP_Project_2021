import React, {Component} from 'react';
import axios from 'axios';




export default class CreateContent extends Component {
  

  constructor(props){
    super(props);
    this.state={
      
      ExamName:"",
      LectureTitle:"",
      Subtitle:"",
      LectureDescription:"",
      MeetingLink:"",
      ReferLink:"",
      MeetingLink:"",
      MlinkError:"",
      RefLinkError:""
    
   
     
         


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
    const isValid = this.validate();

        if(isValid){


        

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

    axios.post("http://localhost:3000/content/add",data).then((res) =>{

      if(res.data.success){
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

  }

  handleSubmit = event => {

    event.preventDefault();
    const isValid = this.validate();
    if(isValid) {
      console.log(this.state);
    }

  };


  validate = () =>{
    let MlinkError= "";
    let RefLinkError= "";

    if(!this.state.MeetingLink.includes('.com')){
      MlinkError = 'Please Add a Valid URL';

    }

    if(!this.state.ReferLink.includes('.com')){
      RefLinkError = 'Please Add a Valid URL';

    }
    

    if (MlinkError || RefLinkError ){
      this.setState({MlinkError, RefLinkError});
      return false;
    }
    return true;

   }


  render(){

    return(
      
      
      <div  class="container">
          {/* <div>
  <img src ="/images/exm2.png" alt=""/>
</div > */}
<center>





  
    <h1>Create Content</h1>
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
    <div style={{fontSize:12, color:"red"}}>{this.state.MlinkError}</div>
      </div>

      <br></br>

      <div class="cls1">
    <label for="formGroupExampleInput4">Reference Link</label>
    <input style={{width:700}} type="text" class="form-control" id="formGroupExampleInput5" placeholder="" value={this.state.ReferLink} name="ReferLink" onChange= {this.handleInputChange}/>
      </div><div style={{fontSize:12, color:"red"}}>{this.state.RefLinkError}</div>
              
      <div class="cls1">
        <br></br>
        <button  type="submit" class="btn btn-primary" href="/ExamContent" style = {{marginTop: '15px' }} onClick={this.onSubmit} >Submit</button>
        
        </div>
              
              </div>
              </div>
              </div>
     
    
      )
  }
}