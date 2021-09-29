import React,{Component} from "react";
import axios from "axios";

export default class Requests extends Component{
    constructor(props){
        super(props);

        this.state={
            newclassrequests:[]
        };
    }

    componentDidMount(){
        this.retrieveRequests();
    }

    retrieveRequests(){
        axios.get("http://localhost:3000/NewClassRequest/newClassRequests").then(res =>{
            if(res.data.success){
                this.setState({
                    newclassrequests:res.data.existingRequests 
                });

                console.log(this.state.posts)
            }
        })
    }

    onDelete = (id) => {
        axios.delete(`http://localhost:3000/NewClassRequest/delete/${id}`).then((res) =>{
            alert("Deleted Successfully");
            this.retrieveRequests();
        })
    }

    render(){
        return(
            <div className ="container"><br></br>
                <h2>New Class Requests</h2><br></br>
                <table class="table">
                    <thead class="thead-dark">
                        <tr>
                        <th scope="col">No</th>
                        <th scope="col">Class Name</th>
                        <th scope="col" style={{width: 250}}>Status</th>
                        <th scope="col" style={{textAlign: 'center'}}>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.newclassrequests.map((newclassrequests,index) =>(
                            <tr>
                                <th scope="row">{index+1}</th>
                                <td>
                                   
                                    {newclassrequests.class_name}
                                    
                                </td>
                                <td>{newclassrequests.status}</td>
                                <td style={{textAlign: 'center'}}>
                                    <a href = {`/teacher/addcls/${newclassrequests._id}`} style={{paddingLeft:0}}>View </a>
                                    <a href = "#" onClick ={() => this.onDelete(newclassrequests._id)} style={{paddingLeft:18}}>Remove </a>
                                    
                                    
                                </td>
                            </tr>
                        ))}
                        </tbody>
                        </table>
            
                    
            </div>
        )
    }
}




// {this.state.newclassrequests.map(newclassrequests =>(
//     <div>
//         <p>{newclassrequests.class_name}</p>
//         <p>{newclassrequests.grade}</p>
//     </div>
// ))}