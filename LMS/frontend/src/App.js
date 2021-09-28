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
        


    </main>
    <Footer/>
    </BrowserRouter>
);



export default App;
