import {
    
    Container,
    Form,
    FormControl,
    Nav,
    Navbar,
    NavDropdown,
  } from "react-bootstrap";
import {Link,useHistory} from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {} from "react-router-dom";
import { logout } from "../../actions/userActions";

const Header = () => {
const history=useHistory();

const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const logoutHandler = () => {
    dispatch(logout());
    history.push("/");
  };

 

    return (
      <div style={{  position: "sticky", top:0}}>
        <Navbar bg="primary" expand="lg" variant="dark">
        <Container>
          
    <Navbar.Brand>
      <Link to="/">   ©IMAX-INSTITUTE</Link>
      
   </Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">

        {/* <Nav className="m-auto">
        <Form inline>
          <FormControl type="text" placeholder="search" classname="mr-sm-2" />
          
      </Form>


        </Nav> */}


      {userInfo ?<Nav className="me-auto " style={{marginLeft:"550px"}}>
        <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link>
         <Link to="/forumhome">Forum</Link> 
  
          </Nav.Link>
          <Nav.Link>
          <Link to="/ExamSelectionPage">Exams</Link> 

          </Nav.Link>
        <Nav.Link href="/teacher/classes">Classes</Nav.Link>
        <NavDropdown title={userInfo?.name} id="basic-nav-dropdown">
          <NavDropdown.Item href="/profile">My Profile</NavDropdown.Item>
          <NavDropdown.Item 
          onClick={logoutHandler}
          >Log Out</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Genarate Report</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="/freeCard/add">Request Free Card</NavDropdown.Item>
        </NavDropdown>
      </Nav>:<Nav>
      <Nav.Link>
         <Link to="/login">Login</Link> 
          
          
          </Nav.Link>
        
        </Nav>}
      
    </Navbar.Collapse>
    </Container>
</Navbar>
</div>
    );
};

export default Header;
