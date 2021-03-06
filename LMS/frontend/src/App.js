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
import TeacherDetails from './Components/TeacherPayment/DisplayTeacherDetails';
import TeacherPaymentReport from './Components/TeacherPayment/GetReport';

//Class Management
import NewClassRequest from './Components/ClassManagement/addClass'
import AllNewClassRequest from './Components/ClassManagement/allNewClassRequests'
import RequestDetails from './Components/ClassManagement/viewNewRequest'
import AddClass from './Components/ClassManagement/newClassRequestDetails'
import TeacherDashboard from './Components/ClassManagement/teacherDashboard'
import AddUpdateRequest from './Components/ClassManagement/addUpdateClass'
import RejectNewClassRequest from './Components/ClassManagement/rejectNewClassRequest'  
import TeacherNewClassRequest from './Components/ClassManagement/teacherNewClassRequest'
import ClassDetailsReport from './Components/ClassManagement/classDetailsReport'


// Content Management
//import Header2 from './Components/ClassManagement/header';
import Body from './Components/ContentManagement/Body';
import AddNotice from './Components/ContentManagement/AddNotice';
import AddLink from './Components/ContentManagement/AddLink';
import AddTute from './Components/ContentManagement/AddTute';
import UpdateNotice from './Components/ContentManagement/UpdateNotice';
import UpdateLink from './Components/ContentManagement/UpdateLink';
import ContentReport from "./Components/ContentManagement/ContentReport";
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


//ExamsContentManagement
import ContentDetails from './Components/ExamContentManagement/ContentDetails';
import CreateContent from './Components/ExamContentManagement/CreateContent';
import EditContent from './Components/ExamContentManagement/EditContent';
import ExamHeader from './Components/ExamContentManagement/ExamHeader';
import ExamContentHome from './Components/ExamContentManagement/ExamContentHome';
import GovExamHome from './Components/ExamContentManagement/GovExamHome';
import ExamPDFReport from './Components/ExamContentManagement/ExamPDFReport';
import TeacherPageSelection from './Components/ExamContentManagement/TeacherPageSelection';
import ExamStudentView from './Components/ExamContentManagement/ExamStudentView';
import ExamSelectionPage from './Components/ExamContentManagement/ExamSelectionPage';
import SLAS from './Components/ExamContentManagement/SLAS';
import SLEAS from './Components/ExamContentManagement/SLEAS';



//PaymentManagement
import AddRequest from "./Components/PaymentManagement/AddRequest";
import Addpayment from "./Components/PaymentManagement/Addpayment";
import AddPayment2 from "./Components/PaymentManagement/AddPayment2";


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
        <Route path="/teacherDetails/:id" exact component={TeacherDetails} />
        <Route path="/teacherGetReport/:id" exact component={TeacherPaymentReport} />

      {/* Class Management */}
      <Route path = "/teacher/save" exact component={NewClassRequest}/>
      <Route path = "/teacher/newClassRequests" exact component={AllNewClassRequest}/>
      <Route path = "/teacher/post/:id" exact component={RequestDetails}/> 
      <Route path = "/teacher/addcls/:id" exact component={AddClass}/>
      <Route path = "/teacher/classes" exact component={TeacherDashboard}/>
      <Route path = "/teacher/addUpdateRequest/:id" exact component={AddUpdateRequest}/>
      <Route path = "/teacher/rejectNewClass/:id" exact component={RejectNewClassRequest}/>
      <Route path = "/teacher/teacher/newClassRequests" exact component={TeacherNewClassRequest}/>
      <Route path = "/teacher/classDetailsReport" exact component={ClassDetailsReport}/>
        

      {/* Content Mangemnt */}
      {/*<Header2/>*/}
      <Route path = "/content/class/:id" exact component={Body}/>
      <Route path = "/content/addNotice/:id" exact component = {AddNotice} />
      <Route path = "/content/addlink/:id" exact component = {AddLink} />
      <Route path = "/content/addtute/:id" exact component = {AddTute} />
      <Route path = "/content/updatenotice/:id" exact component = {UpdateNotice} />
      <Route path = "/content/updatelink/:id" exact component = {UpdateLink} />
      <Route path = "/content/contentreport/:id" exact component = {ContentReport} />
      {/*<Route path = "/content/studentView/:id" exact component = {StudentView} />*/}
      

      ?????????{/* Admin panel Mangemnt */}
      <Route path="/notice/add/" exact component={AddNoticeAdmin} />
      <Route path="/AllNotices" exact component={AllNotices} />
      <Route path = "/nav"  exact component={Navbar}/>
     <Route path = "/vali"  exact component={ValiationForm}/>
      <Route path="/notice/update/:id" exact component={Update}/>
      <Route path="/notice/delete/:id" exact component={Delete}/>
      <Route path = "/notieboard"  exact component={Noticeboard}/>
      <Route path = "/pdf"  exact component={Data}/>



    {/* Payment Mangemnt */}
    <Route path="/freeCard/add" exact component={AddRequest} />
    <Route path="/payment" exact component={Addpayment} />
    <Route path="/payment2" exact component={AddPayment2} />



    
    {/* Student Form */}
           <Route path="/forumhome" exact component = {ForumHome}></Route>
          <Route path="/addquestion" exact component = {AddQuestion}></Route>
          <Route path="/edit/:id" exact component = {EditQuestion}></Route>
          <Route path="/ViewQuestion/:id" exact component = {ViewQuestion}></Route>


    {/* ExamsContentManagement */}
          <Route path="/ExamContent" exact component = {ExamContentHome}></Route>
          <Route path="/ExamAdd" exact component = {CreateContent}></Route>
          <Route path="/ExamEdit/:id" exact component = {EditContent}></Route>
          <Route path="/ExamContentDetails/:id" exact component = {ContentDetails}></Route>
          <Route path="/GovExamHome" exact component = {GovExamHome}></Route>
          <Route path="/ExamHeader" exact component = {ExamHeader}></Route>
          <Route path="/ExamReport" exact component = {ExamPDFReport}></Route>
          <Route path="/ClassExamsPage" exact component = {TeacherPageSelection}></Route>
          <Route path="/ExamStudentView" exact component = {ExamStudentView}></Route>
          <Route path="/ExamSelectionPage" exact component = {ExamSelectionPage}></Route>
          <Route path="/SLAS" exact component = {SLAS}></Route>
          <Route path="/SLEAS" exact component = {SLEAS}></Route>

          {/* <Route path="/content/:id" exact component = {ExamHeader}></Route> */}


    </main>
    <Footer/>
    </BrowserRouter>
);



export default App;
