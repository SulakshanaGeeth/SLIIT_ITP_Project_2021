import React, {Component} from 'react';
import axios from 'axios';


export default class AddQuestion extends Component {

  constructor(props){
    super(props);
    this.state={

      
      Name:"",
      QuestionCategory:"",
      QuestionTitle:"",
      Question:"",

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

    const {Name,QuestionCategory,QuestionTitle,Question} = this.state;

    const data ={
      
      Name:Name,
      QuestionCategory:QuestionCategory,
      QuestionTitle:QuestionTitle,
      Question:Question
      
    }
    console.log(data)

    axios.post("http://localhost:3000/question/add",data).then((res) =>{

      if(res.data.success){
        this.setState(
          {
          Name:"",
          QuestionCategory:"",
          QuestionTitle:"",
          Question:""
          
          }
        )
        
      }

    })

  }

  render(){

    return(
      
      <div>
          <div>

          <img src ="/images/exm2.png" alt=""/>

        </div>
      Add Question
      <form class="cls1">

      <div className="form-group">
        <label style= {{marginBottom:'5px'}}>Name</label>
        <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" value={this.state.Name} name="Name" onChange= {this.handleInputChange} />
      </div>
      <br></br>

  

      <select class="form-select" aria-label="Default select example" placeholder="" value={this.state.QuestionCategory} name="QuestionCategory" onChange= {this.handleInputChange}>
        <option selected>Question Category</option>
        <option value="O/L Class Subjects">O/L Class Subjects</option>
        <option value="Government Exams">Government Exams</option>
        <option value="Class Fees">Class Fees</option>
        <option value="Difficulties">Difficulties</option>
      </select>

      <div className="form-group">
        <label style= {{marginBottom:'5px'}}>Question Title</label>
        <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" value={this.state.QuestionTitle} name="QuestionTitle" onChange= {this.handleInputChange} />
      </div>
     

      <div className="form-group">

            <label for="exampleFormControlTextarea1" className="form-label">Question</label>
            <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" value={this.state.Question} name="Question" onChange= {this.handleInputChange} ></textarea>
            <br></br>
            </div>
   

      </form>

              
      <div class="col-auto my-1">
        <br></br>
        <button type="submit" class="btn btn-primary" style = {{marginTop: '15px' }} onClick={this.onSubmit} >Submit</button>
        
        </div>
              
        </div>
     
    
      )
  }
}