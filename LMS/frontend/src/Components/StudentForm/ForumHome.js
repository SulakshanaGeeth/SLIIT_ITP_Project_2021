import React, {Component} from 'react';
import axios from 'axios';

export default class ForumHome extends Component {
  
  constructor(props){
    super(props);

    this.state = {
      questions:[]
    };

  }

  componentDidMount(){
    this.retrieveQuestions();
  }

  retrieveQuestions(){
    axios.get("http://localhost:3000/question/").then (res =>{

    if(res.data.success){

      this.setState({
        questions:res.data.existingQuestions
      });

      console.log(this.state.questions)


    }
  

    })
  }  

  onDelete = (id)=>{

    axios.delete(`http://localhost:3000/question/delete//${id}`).then((res) =>{
      alert("Question Deleted");
      this.retrieveQuestions();
    })
  }



//   filterData(questions, SearchQry){
//     const result = contents.filter((contents)=>
//     contents.name.toLowerCase().includes(SearchQry) ||
//     contents.QuestionCategory.toLowerCase().includes(SearchQry) ||
//     contents.Subtitle.toLowerCase().includes(SearchQry)

    
//     )
//     this.setState({contents:result})

//   }
//   Searchfunc = (e) =>{
//     const SearchQry = e.currentTarget.value;
    
//     axios.get("/question").then(res =>{
//       if(res.data.success){
//         this.filterData(res.data.existingContents,SearchQry)
//       }
//     })
//   }
  

  render (){
    return (
      

      <div className="container">
            <center>
         <h2>Added Questions</h2>
            </center>
        <div className="row">
          <div className="col-lg-9 mt-2 mb-2">
           
            
          </div>
          <div className="col-lg-3 mt-2 mb-2">
            {/* <input
            className="form-control"
            type="search"
            placeholder="Search"
            name="searchQuery"
            onChange={this.Searchfunc}>

            </input> */}
          </div>
        </div>
        <p>Student Forum</p>
        <table className = "table table-hover">

          
          <thead>
          <tr class="bg-info">

              <th scope="col">Number</th>
              <th scope="col">Name</th>
              <th scope="col">Question Category</th>
              <th scope="col">Question Title</th>
              <th scope="col">Question</th>
              <th scope="col">Action</th>

            </tr>
          </thead>
          <tbody>
          {this.state.questions.map((questions, index) =>(
            <tr class="table-info" key = {index}>
                 <th scope="row">{index+1}</th>
                 <td class="table-light">

                     <a href= {`/ViewQuestion/${questions._id}`} style={{textDecoration:'none'}}>

                     {questions.Name}
                     </a>
                     
                     
                     </td> 
                     <td class="table-info">{questions.QuestionCategory}</td> 
                
                 <td class="table-info">{questions.QuestionTitle}</td> 
                 <td class="table-info">{questions.Question}</td>
                 
                  <td>
                    <a className = "btn btn-outline-warning" href ={`/edit/${questions._id}`}>
                    <i class="far fa-file-alt"></i>&nbsp;Edit
                       </a>
                       &nbsp;
                       <a className = "btn btn-outline-danger" href ="#" onClick={()=>this.onDelete(questions._id)}>
                       <i class="fas fa-eraser"></i>&nbsp;Delete
                       </a>

                  </td>


            </tr>

          ))}


          </tbody>
        </table>
        
        <button className="btn btn-success"><a href="/addquestion" style={{textDecoration:'none', color:'white'}}>Add New Question</a></button>

       


    
      </div>
    )
  }



}