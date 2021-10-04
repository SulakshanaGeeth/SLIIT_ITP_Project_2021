import React, {Component} from 'react';
import axios from 'axios';
// import content from '../../../SysBackend/models/content';
// import content from '../../../SysBackend/models/content';

export default class ExamContentHome extends Component {
  
  constructor(props){
    super(props);

    this.state = {
      contents:[]
    };


  }

  componentDidMount(){
    this.retrieveContent();
  }

  retrieveContent(){
    axios.get("/content/").then (res =>{

    if(res.data.success){

      this.setState({
        contents:res.data.existingContents
      });

      console.log(this.state.contents)


    }
  

    })
  }  

  onDelete = (id)=>{

    axios.delete(`/content/delete/${id}`).then((res) =>{
      alert("Content Deleted.!");
      this.retrieveContent();
    })
  }

  // Search Data


  filterData(contents, SearchQry){
    const result = contents.filter((contents)=>
    contents.ExamName.toLowerCase().includes(SearchQry) ||
    contents.LectureTitle.toLowerCase().includes(SearchQry) ||
    contents.Subtitle.toLowerCase().includes(SearchQry)

    
    )
    this.setState({contents:result})

  }
  Searchfunc = (e) =>{
    const SearchQry = e.currentTarget.value;
    
    axios.get("/content").then(res =>{
      if(res.data.success){

        this.filterData(res.data.existingContents,SearchQry)

      }
    })
    
  }

  render (){
    return (

      <div>
        <img src ="/images/exhome3.png" alt=""/>
       
        


      <div className="container">
      <br/>
 

        
        <div className="row">
          <div className="col-lg-9 mt-2 mb-2">
          <h3 class="home-title">
  <span>Recently Added Exam Contents</span>
  <span>Imax Institute | Examination Unit</span>
</h3>
            
          </div>
          <div className="col-lg-3 mt-2 mb-2">
            <input
            className="form-control"
            type="search"
            placeholder="Search"
            name="searchQuery"
            onChange={this.Searchfunc}>

            </input>
          </div>
        </div>
        <p>All Content</p>
        <table className = "table table-hover">

          
          <thead class="thead-dark">
          <tr class="bg-info">
              <th scope="col">Number</th>
              <th scope="col">Exam</th>
              <th scope="col">Title</th>
              {/* <th scope="col">Description</th> */}
              {/* <th scope="col">Meeting Link</th> */}
              <th scope="col">Subtitle</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
          {this.state.contents.map((contents, index) =>(
            <tr key = {index}>
                 <th scope="row">{index+1}</th>
                 <td class="table-light">
                     <a href= {`/ExamContentDetails/${contents._id}`} style={{textDecoration:'none'}}>

                     {contents.ExamName}
                     </a>
                     
                     
                     </td> 
                     <td >{contents.LectureTitle}</td> 
                 {/* <td>{contents.LectureDescription}</td> 
                 <td>{contents.MeetingLink}</td>  */}
                 <td >{contents.Subtitle}</td> 
                  <td>
                    <a className = "btn btn-outline-success" href ={`/ExamEdit/${contents._id}`}>
                    <i class="far fa-file-alt"></i>&nbsp;Edit
                       </a>
                       &nbsp;
                       <a className = "btn btn-outline-danger" href ="#" onClick={()=>this.onDelete(contents._id)}>
                       <i class="fas fa-eraser"></i>&nbsp;Delete
                       </a>

                  </td>


            </tr>

          ))}


          </tbody>
        </table>
        
        <button className="btn btn-primary"><a href="/ExamAdd" style={{textDecoration:'none', color:'white'}}>Create New Content</a></button>

       


    
      </div>
      </div>
    )
  }



}