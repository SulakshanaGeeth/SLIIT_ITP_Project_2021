import { Button, Container, Row } from "react-bootstrap";
import "./LandingPage.css";
import { useEffect } from "react";
import {Link} from "react-router-dom";
const LandingPage = ({history}) => {

    useEffect(() => {
        const userInfo = localStorage.getItem("userInfo");
       
        if (userInfo){
          history.push("/mynotes");
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
        </div>
    );
    
};

export default LandingPage;
