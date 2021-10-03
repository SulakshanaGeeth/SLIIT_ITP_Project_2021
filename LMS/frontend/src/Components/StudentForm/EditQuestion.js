import React, {Component} from 'react'
import axios from 'axios'


export default class EditQuestion extends Component {


  constructor(props){
    super(props);
    this.state={
      
          Name:"",
          QuestionCategory:"",
          QuestionTitle:"",
          Question:""
         


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

    const {Name,QuestionCategory,QuestionTitle,Question} = this.state;

    const data ={

      Name:Name,
      QuestionCategory:QuestionCategory,
      QuestionTitle:QuestionTitle,
      Question:Question

    }

    console.log(data)

    axios.put(`http://localhost:3000/question/update/${id}`,data).then((res) =>{

      if(res.data.success){
        alert("Question Updated Successfully.!")
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

  componentDidMount(){

    const id = this.props.match.params.id;

    axios.get(`/question/${id}`).then((res) =>{
      if(res.data.success){

        this.setState({
          Name:res.data.question.Name,
          QuestionCategory:res.data.question.QuestionCategory,
          QuestionTitle:res.data.question.QuestionTitle,
          Question:res.data.question.Question,

        })

      }

      if(res.data.success){

        this.setState({

          question:res.data.question

        });

        console.log(this.state.question);

      }

    });

  }

  render(){

    return (
      <div>

      <center>
      <h1>Update Content</h1>
      </center>
      <br></br>
      <form class="row g-3">

      <div className="form-group">
        <label style= {{marginBottom:'5px'}}>Name</label>
        <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="" value={this.state.Name} name="Name" onChange= {this.handleInputChange} />
      </div>

      <select class="form-select" aria-label="Default select example" placeholder="" value={this.state.QuestionCategory} name="QuestionCategory" onChange= {this.handleInputChange}>
        <option selected>Question Category</option>
        <option value="O/L Class Subjects">O/L Class Subjects</option>
        <option value="Government Exams">Government Exams</option>
        <option value="Class Fees">Class Fees</option>
        <option value="Difficulties">Difficulties</option>
      </select>

      <div className="form-group">
        <label style= {{marginBottom:'5px'}}>Question Title</label>
        <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="" value={this.state.QuestionTitle} name="QuestionTitle" onChange= {this.handleInputChange} />
      </div>
     
      <div className="form-group">

            <label for="exampleFormControlTextarea1" className="form-label">Question</label>
            <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" value={this.state.Question} name="Question" onChange= {this.handleInputChange} ></textarea>
            <br></br>

            </div>
              </form>

      <div class="col-auto my-1">
        <br></br>

        <button type="submit" class="btn btn-primary" style = {{marginTop: '15px' }} onClick={this.onSubmit} >Update</button>
        
        </div>
              
              </div>
     
      
    )
  }
}