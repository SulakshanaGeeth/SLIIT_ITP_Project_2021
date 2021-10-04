import { Button, Container, Row } from "react-bootstrap";
import "./LandingPage.css";
import React, { useEffect } from "react";
import {Link} from "react-router-dom";
import "../../bootstrap.min.css"
const LandingPage = ({history}) => {

    useEffect(() => {
        const userInfo = localStorage.getItem("userInfo");
       
        if (userInfo){
          history.push("/ExamStudentView");
        }
       }, [history])
       



    return (
        <div className="main">
            <Container>
                <Row>
                    <div className="intro-text">
                        <div>
                            <h1 className="title">Welcome IMS Institute</h1>
                            <p className="subtitle">Live as if you were die tomorrow.learn as if you were to live forever</p>
                        </div>

                        <div className="buttonContainer">
                            
                <Link to="/login">
                <Button size="lg" className="landingbutton">
                  Login
                </Button>
                </Link>
                <Link to="/register">
                <Button
                  variant="outline-primary"
                  size="lg"
                  className="landingbutton"
                >
                  Signup
                </Button>
                </Link>
              
            </div>

                    </div>
                </Row>


            </Container>


            <Container>
            <React.Fragment>
  <div className="container">
  <div className="row">
    <div className="col"><div class="card" >
  <img src="/images/exam3.png" class="card-img-top" alt="..." />
  <div class="card-body">
    <h5 class="card-title">A/L Classes</h5>
    <p class="card-text">fast access to learning materials
      Recieve all advanced level notes to your fingertips in just seconds. join with Imax for Better Learning Experiance.</p>
    
  </div>
</div>

</div>
    <div className="col"><div class="card" >
  <img src="/images/exam4.png" class="card-img-top" alt="..." />
  <div class="card-body">
    <h5 class="card-title">Goverment Exam</h5>
    <p class="card-text">Face any government examination wothout any doubt. get access to all the study materials without any delay. join with Imax Now.</p>
    
  </div>
</div></div>
    <div className="col"><div class="card" >
  <img src="/images/exam5.png" class="card-img-top" alt="..." />
  <div class="card-body">
    <h5 class="card-title">Student Forum</h5>
    <p class="card-text">Resolve all your academic related issues using one interface deisgned for all the imax internal students.
Use student forum for any student issue.</p>
    
  </div>
</div></div>
  </div>
</div>   

</React.Fragment>

</Container>




        </div>

























    );
    
};

export default LandingPage;
