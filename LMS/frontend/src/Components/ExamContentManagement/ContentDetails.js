import React, {cloneElement, Component} from 'react';
import axios from 'axios';


export default class ContentDetails extends Component {
  constructor(props){
    super(props);

    this.state={
        content:{}

    };

  }

  componentDidMount(){

    const id = this.props.match.params.id;

    axios.get(`/content/${id}`).then((res) =>{

      if(res.data.success){

        this.setState({

          content:res.data.content

        });

        console.log(this.state.content);

      }

    });
  }

  render(){

    const {ExamName, LectureTitle, Subtitle, LectureDescription, MeetingLink, ReferLink} = this.state.content;


    return (

      
      
        <div style={{marginTop:'100px'}}>

          <div>
            <center>
            <h2>Added Contents</h2>
            </center>
            <br></br>
          </div>
    
          <h4>{ExamName}</h4>
         
          <hr/>
          <dl class="row">
            <br></br>
            <br></br>
            <dt className="col-sm-3">Exam Name - </dt>
            <dd className="col-sm-9">{ExamName}</dd>

            <br></br>
            <br></br>

            <dt className="col-sm-3">Lecture Title </dt>
            <dd className="col-sm-9">{LectureTitle}</dd>

            <br></br>
            <br></br>

            <dt className="col-sm-3">LectureSubtitile - </dt>
            <br></br>
            <br></br>
            <dd className="col-sm-9">{Subtitle }</dd>

           

            <dt className="col-sm-3">Lecture Description - </dt>
            <dd className="col-sm-9">{LectureDescription}</dd>

            <br></br>
            <br></br>

            <dt className="col-sm-3">Meeting Links - </dt>
            <dd className="col-sm-9">{MeetingLink}</dd>

            <br></br>
            <br></br>

           
            <dt className="col-sm-3">Reference Link - </dt>
            <dd className="col-sm-9">{ReferLink}</dd>
            
            </dl>



          
        </div>
     

      
    )
  }
}