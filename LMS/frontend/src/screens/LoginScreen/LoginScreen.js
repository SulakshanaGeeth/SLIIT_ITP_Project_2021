import { Button, Col, Form, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import MainScreen from "../../component/MainScreen";
import "./LoginScreen.css";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import Loading from "../../component/Loading";
import ErrorMessage from "../../component/ErrorMessage";
import { login } from "../../actions/userActions";
const LoginScreen = ({ history }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const [error,setError]=useState(false);
  // const [loading,setLoading]=useState(false);

  // function LoginScreen({ history }) {
  //   const [email, setEmail] = useState("");
  //   const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.userLogin);
  const { loading, error, userInfo } = userLogin;
  // METHANA /mynotes eka wenas krala Home page eka denna.
  useEffect(() => {
    if (userInfo) {
      if (userInfo._id == "613edad5e43df2560f8a6016") {
        history.push("/pendingPayments");
      } else if (userInfo.isAdmin) {
        localStorage.setItem("teacherID", userInfo._id);
        localStorage.setItem("teacherName", userInfo.name);
        console.log(userInfo._id);
        history.push("/WithdrawHome");
      } else history.push("/profile");
    }
  }, [history, userInfo]);

  const submitHandler = async (e) => {
    e.preventDefault();

    dispatch(login(email, password));
  };

  // function submitHandler(e){

  //   e.preventDefault();

  //   const checkuser = {

  //     email,
  //     password

  //   }

  //   axios.post("/api/users/login",checkuser).then(()=>{

  //       alert("Bank Added")

  //   }).catch((err)=>{

  //       alert(err)

  //   })

  // }

  return (
    <MainScreen title="LOGIN">
      <div className="loginContainer">
        <Form onSubmit={submitHandler}>
          {error && <ErrorMessage variant="danger">{error}</ErrorMessage>}
          {loading && <Loading />}
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              value={email}
              placeholder="Enter email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              value={password}
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
        <Row className="py-3">
          <Col>
            New Customer ? <Link to="/register">Register Here</Link>
          </Col>
        </Row>
      </div>
    </MainScreen>
  );
};

export default LoginScreen;
