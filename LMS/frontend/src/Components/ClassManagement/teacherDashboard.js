import React,{Component} from "react";
import axios from "axios";

export default class Classes extends Component{
    constructor(props){
        super(props);

        

        this.state={
            classes:[]
        };
    }

    componentDidMount(){
        this.retrieveRequests();
    }

    retrieveRequests(){

        var id = localStorage.getItem('teacherID');
        console.log(id);
        axios.get(`http://localhost:3000/classes/all/${id}`).then(res =>{
            if(res.data.success){
                this.setState({
                    classes:res.data.existingRequests 
                });

                console.log(this.state.posts)
            }
        })
    }


    onDelete = (id) => {
        axios.delete(`http://localhost:3000/classes/delete/${id}`).then((res) =>{
            alert("Deleted Successfully");
            this.retrieveRequests();
        })
    }


    filterData(classes, searchKey){
        const result = classes.filter((post) =>
        post.class_name.toLowerCase().includes(searchKey) ||
        post.class_name.includes(searchKey)
        )
        this.setState({classes:result})
    }


    handleSearchArea = (e) =>{
        const searchKey = e.currentTarget.value;

        var id = localStorage.getItem('teacherID');
        console.log(id);
        axios.get(`http://localhost:3000/classes/all/${id}`).then(res =>{
            if(res.data.success){
                this.filterData(res.data.existingRequests,searchKey)
            }
        });
    }

    render(){
        return(
            <div className ="container"><br></br>

                <div style={{paddingLeft:280}}>
                    <br />

                    <a className="btn btn-dark" href="/teacher/classes" role="button">Classes</a>&nbsp; 
                    <a className="btn btn-dark" href="/teacher/save" role="button">Add New Class</a>&nbsp; 
                    <a className="btn btn-dark" href="/teacher/teacher/newClassRequests" role="button">Class Request</a>&nbsp; 
                    <a className="btn btn-dark" href="/WithdrawHome" role="button">Payment</a>&nbsp; 
                    <a className="btn btn-dark" href="/teacher/classDetailsReport" role="button">Class Details</a>

                    <br />
                
                </div>
                <br />
                <span className="border-left-0"> 
                    <h2 style={{fontSize: "40px",paddingLeft:485}}>Classes</h2><br></br>

                    <div className = "col-lg-3 mt-2 mb-2" >
                        <input 
                        className = "form-control"
                        type = "search"
                        placeholder = "Search"
                        name = "searchQuery"
                        onChange={this.handleSearchArea}
                        style={{marginLeft:262}}></input>
                    </div>

                    {this.state.classes.map((classes,index) =>(

                        <div style={{paddingLeft:280}}>
                            <br></br> 
                            <h3 className="card-text">         
                                <a href = {`/content/class/${classes._id}`} className="textUnderline">{classes.class_name}</a>
                            </h3>

                            <a href ={`/teacher/addUpdateRequest/${classes._id}`} className="greenClasses">Edit </a>
                            <a href = "#" onClick ={() => this.onDelete(classes._id)} className="redClasses">Remove</a>
                            <br></br>
                        </div>
                            
                    ))}
                
                </span>
                <br />
                
            </div>
        )
    }
}




