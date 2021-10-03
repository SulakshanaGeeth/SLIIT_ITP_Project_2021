import "./App.css";
import Header from "./component/Header/Header";
import Footer from "./component/Footer/Footer";
import LandingPage from "./screens/LandingPage/LandingPage";
import LoginScreen from "./screens/LoginScreen/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen/RegisterScreen";
import {BrowserRouter,Route} from "react-router-dom";
import MyNotes from "./screens/MyNotes/MyNotes";
import ProfileScreen from "./screens/ProfileScreen/ProfileScreen";


// import Header from './componenents/TeacherPayment/Header';
import AddBank from './Components/TeacherPayment/AddBank';
import AllBanks from './Components/TeacherPayment/AllBanks';
import UpdateBank from './Components/TeacherPayment/UpdateBank'
import DeleteBank from './Components/TeacherPayment/deleteBank';
import SelectBank from './Components/TeacherPayment/SelectBank';
import Withdraw from './Components/TeacherPayment/Withdraw';
import PendingPaymets from './Components/TeacherPayment/PendingPaymets';
import WithdrawHome from './Components/TeacherPayment/WithdrawHome';
import WithdrawPayment from './Components/TeacherPayment/WithdrawPayment';

//Class Management
import NewClassRequest from './Components/ClassManagement/addClass'
import AllNewClassRequest from './Components/ClassManagement/allNewClassRequests'
import RequestDetails from './Components/ClassManagement/viewNewRequest'
import AddClass from './Components/ClassManagement/newClassRequestDetails'
import TeacherDashboard from './Components/ClassManagement/teacherDashboard'
import AddUpdateRequest from './Components/ClassManagement/addUpdateClass'
import RejectNewClassRequest from './Components/ClassManagement/rejectNewClassRequest'  
import TeacherNewClassRequest from './Components/ClassManagement/teacherNewClassRequest'


// Content Management
//import Header2 from './Components/ClassManagement/header';
import Body from './Components/ContentManagement/Body';
import AddNotice from './Components/ContentManagement/AddNotice';
import AddLink from './Components/ContentManagement/AddLink';
import AddTute from './Components/ContentManagement/AddTute';
import UpdateNotice from './Components/ContentManagement/UpdateNotice';
import UpdateLink from './Components/ContentManagement/UpdateLink';
import StudentView from './Components/ContentManagement/StudentView';

//Admin panel
import AddNoticeAdmin from './Components/Adminpaneladministration/AddNoticeAdmin';
import AllNotices from './Components/Adminpaneladministration/AllNotices';
import Navbar from './Components/Adminpaneladministration/Navbar';
import ValiationForm from './Components/Adminpaneladministration/ValidationForm';
import Update from './Components/Adminpaneladministration/Update';
import Delete from './Components/Adminpaneladministration/Delete';
import Noticeboard from './Components/Adminpaneladministration/Noticeboard';
import Data from './Components/Adminpaneladministration/Data';


// Student Foram
import ForumHome from './Components/StudentForm/ForumHome';
import AddQuestion from './Components/StudentForm/AddQuestion';
import EditQuestion from './Components/StudentForm/EditQuestion';
import ViewQuestion from './Components/StudentForm/ViewQuestion';

const App = () => (
  <BrowserRouter>
    <Header/>
    <main>
    <Route path="/" component={LandingPage} exact/>
    <Route path="/login" component={LoginScreen}exact/>
    <Route path="/profile" component={ProfileScreen}exact/>
    <Route path="/register" component={RegisterScreen}exact/>
    <Route path="/mynotes" component={()=><MyNotes/>}exact/>

        <Route path="/bank/add" exact component={AddBank}/>
        <Route path="/bank/" exact component={AllBanks}/>
        <Route path="/bank/update/:id" exact component={UpdateBank}/>
        <Route path="/bank/delete/:id" exact component={DeleteBank}/>
        <Route path="/withdraw" exact component={Withdraw}/>
        <Route path="/selectbank/:id" exact component={SelectBank} />
        <Route path="/pendingPayments" exact component={PendingPaymets} />
        <Route path="/WithdrawHome" exact component={WithdrawHome} />
        <Route path="/WithdrawPayment" exact component={WithdrawPayment} />

      {/* Class Management */}
      <Route path = "/teacher/save" exact component={NewClassRequest}/>
      <Route path = "/teacher/newClassRequests" exact component={AllNewClassRequest}/>
      <Route path = "/teacher/post/:id" exact component={RequestDetails}/> 
      <Route path = "/teacher/addcls/:id" exact component={AddClass}/>
      <Route path = "/teacher/classes" exact component={TeacherDashboard}/>
      <Route path = "/teacher/addUpdateRequest/:id" exact component={AddUpdateRequest}/>
      <Route path = "/teacher/rejectNewClass/:id" exact component={RejectNewClassRequest}/>
      <Route path = "/teacher/teacher/newClassRequests" exact component={TeacherNewClassRequest}/>
        

      {/* Content Mangemnt */}
      {/*<Header2/>*/}
      <Route path = "/content/class/:id" exact component={Body}/>
      <Route path = "/content/addNotice/:id" exact component = {AddNotice} />
      <Route path = "/content/addlink/:id" exact component = {AddLink} />
      <Route path = "/content/addtute/:id" exact component = {AddTute} />
      <Route path = "/content/updatenotice/:id" exact component = {UpdateNotice} />
      <Route path = "/content/updatelink/:id" exact component = {UpdateLink} />
      {/*<Route path = "/content/studentView/:id" exact component = {StudentView} />*/}
      

      ​​​
      <Route path="/notice/add/" exact component={AddNoticeAdmin} />
    <Route path="/AllNotices" exact component={AllNotices} />
   
    <Route path = "/nav"  exact component={Navbar}/>
    <Route path = "/vali"  exact component={ValiationForm}/>
  
      
    <Route path="/notice/update/:id" exact component={Update}/>
    <Route path="/notice/delete/:id" exact component={Delete}/>
    <Route path = "/notieboard"  exact component={Noticeboard}/>
    <Route path = "/pdf"  exact component={Data}/>

    
    {/* Student Form */}
           <Route path="/forumhome" exact component = {ForumHome}></Route>
          <Route path="/addquestion" exact component = {AddQuestion}></Route>
          <Route path="/edit/:id" exact component = {EditQuestion}></Route>
          <Route path="/ViewQuestion/:id" exact component = {ViewQuestion}></Route>

    </main>
    <Footer/>
    </BrowserRouter>
);



export default App;
