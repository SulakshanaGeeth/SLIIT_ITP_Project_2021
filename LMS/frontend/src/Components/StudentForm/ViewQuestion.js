import React, {Component} from 'react';
import axios from 'axios';


export default class ViewQuestion extends Component {
  constructor(props){
    super(props);

    this.state={
        question:{}
    };

  }

  componentDidMount(){

    const id = this.props.match.params.id;

    axios.get(`http://localhost:3000/question/${id}`).then((res) =>{

      if(res.data.success){

        this.setState({

          question:res.data.question

        });

        console.log(this.state.question);

      }

    });
  }

  render(){

    const {Name,QuestionCategory,QuestionTitle,Question} = this.state.question;

    return (
        <div style={{marginTop:'100px'}}>
    
          <h4>{Name}</h4>
         
          <hr/>
          <dl class="row"></dl>
            <br></br>
            <br></br>

            <dt className="col-sm-3">Name - </dt>
            <dd className="col-sm-9">{Name}</dd>
            <br></br>
            <br></br>


            <dt className="col-sm-3">Question Category - </dt>
            <dd className="col-sm-9">{QuestionCategory}</dd>

            <br></br>
            <br></br>

            <dt className="col-sm-3">QuestionTitle - </dt>
            <dd className="col-sm-9">{QuestionTitle}</dd>

            <br></br>
            <br></br>

            <dt className="col-sm-3">Question - </dt>
            <dd className="col-sm-9">{Question}</dd>

            <br></br>
            <br></br>

        </div>
      
    )
  }
}