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
import AddBank from './componenents/TeacherPayment/AddBank';
import AllBanks from './componenents/TeacherPayment/AllBanks';
import UpdateBank from './componenents/TeacherPayment/UpdateBank'
import DeleteBank from './componenents/TeacherPayment/deleteBank';
import SelectBank from './componenents/TeacherPayment/SelectBank';
import Withdraw from './componenents/TeacherPayment/Withdraw';
import PendingPaymets from './componenents/TeacherPayment/PendingPaymets';
import WithdrawHome from './componenents/TeacherPayment/WithdrawHome';
import WithdrawPayment from './componenents/TeacherPayment/WithdrawPayment';



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
        


    </main>
    <Footer/>
    </BrowserRouter>
);



export default App;
