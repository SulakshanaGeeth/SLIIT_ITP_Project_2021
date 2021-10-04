import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Col, Form, Row } from 'react-bootstrap';
import MainScreen from "../../component/MainScreen";
import ErrorMessage, {} from "../../component/ErrorMessage";
import { useHistory } from "react-router";
import { updateProfile } from "../../actions/userActions";
import Loading from "../../component/Loading";
import "./ProfileScreen.css";
import jsPDF from 'jspdf';

const ProfileScreen = () => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [pic, setPic] = useState();
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [picMessage, setPicMessage] = useState();
  



    const dispatch = useDispatch();

    const userLogin = useSelector((state) => state.userLogin);
    const { userInfo } = userLogin;
  
    const userUpdate = useSelector((state) => state.userUpdate);
    const { loading, error, success } = userUpdate;


    const history=useHistory();
    useEffect(() => {
        if (!userInfo) {
          history.push("/");
        } else {
          setName(userInfo.name);
          setEmail(userInfo.email);
          setPic(userInfo.pic);
        }
      }, [history, userInfo]);



    const postDetails = (pics) => {
        if (!pics) {  
         return setPicMessage("Please Select an Image");
        }
        setPicMessage(null);
        if (pics.type === "image/jpeg" || pics.type === "image/png") {
          const data = new FormData();
          data.append("file", pics);
          data.append("upload_preset", "imaxinstitute");
          data.append("cloud_name", "dhnjhdggs");
          fetch("https://api.cloudinary.com/v1_1/dhnjhdggs/image/upload", {
            method: "post",
            body: data,
          })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
              setPic(data.url.toString());
            })
            .catch((err) => {
              console.log(err);
            });
        } else {
          return setPicMessage("Please Select an Image");
        }
      };

      const submitHandler = (e) => {
        e.preventDefault();
    
        if(password==confirmPassword)
        dispatch(updateProfile({ name, email, password, pic }));
      };

      function pdfGenerate(){
        var doc = new jsPDF('landscape','px','a1','false');
        doc.html(document.querySelector("#UserProfile"),{
          callback: function(pdf){
            pdf.save("mypdf.pdf");
          }
        });
      };



    return( <MainScreen title="EDIT PROFILE">
    <div id="UserProfile">
        <Row className="profileContainer">
            <Col md={6}>


            <Form onSubmit={submitHandler}>
            {/* <Form > */}
              {loading && <Loading />}
              {success && (
                <ErrorMessage variant="success">
                  Updated Successfully
                </ErrorMessage>
              )}
              {error && <ErrorMessage variant="danger">{error}</ErrorMessage>}
              <Form.Group controlId="name">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                ></Form.Control>
              </Form.Group>
              <Form.Group controlId="email">
                <Form.Label>Email Address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                ></Form.Control>
              </Form.Group>
              <Form.Group controlId="password">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Enter Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                ></Form.Control>
              </Form.Group>
              <Form.Group controlId="confirmPassword">
                <Form.Label>Confirm Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Confirm Password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                ></Form.Control>
              </Form.Group>{" "}
              {picMessage && (
                <ErrorMessage variant="danger">{picMessage}</ErrorMessage>
              )}
              <Form.Group controlId="pic">
                <Form.Label>Change Profile Picture</Form.Label>
                <Form.File
                  onChange={(e) => postDetails(e.target.files[0])}
                  id="custom-file"
                  type="image/png"
                  label="Upload Profile Picture"
                  custom
                />
              </Form.Group>
              <Button type="submit" varient="primary">
                Update
              </Button>
            </Form>
            </Col>


            <Col
             style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
              >
             <img src={pic} alt={name} className="profilePic" />
             </Col>
        </Row>
        <button onClick={pdfGenerate}>Download pdf</button>
    </div>
    </MainScreen>
    )
};

export default ProfileScreen;
