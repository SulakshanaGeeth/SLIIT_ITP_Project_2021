import React, {useState} from "react"
import axios from "axios";
import "./payment.css";


export default function AddBank(props){

    var tid = localStorage.getItem("teacherID");

    var Teacher_ID = tid;

    const [Acc_no,setAcc_no] = useState("");
    const [Bank_name,setBank_name] = useState("");
    const [Branch_name,setbranch_name] = useState("");
    const [Acc_Holder_name,setholder_name] = useState("");

    function sendData(e){
        e.preventDefault();
        
        const newBank = {
            Teacher_ID,
            Acc_no,
            Bank_name,
            Branch_name,
            Acc_Holder_name
        }
        axios.post("http://localhost:3000/bank/add",newBank).then(()=>{
            alert("Bank Added")
            props.history.push('/bank/');
        }).catch((err)=>{
            alert(err)
        })
    }

    return(
    <div className="AddBank">
        <button className="backbtn" onClick={() => props.history.push("/bank/")}>
        Back</button>
      <h1 class="bankdetailsh1">Add Bank Details</h1>
         
        <form onSubmit={sendData}>
            <div className="form-group2">
                <label for="Acc_no" class="lb_Acc_no2">Account Name</label>
                <input type="text" pattern="[0-9]{3,10}" title="Numbers Only (should contain min 3 numbers)"
                className="Bank_form" id="Acc_no2" placeholder="Accont Number"
                onChange={(e)=>{
                    setAcc_no(e.target.value);
                }} required></input><br/>
            

                <label for="bank_name" class="lb_bank_name2">Bank Name</label>
                <input type="text" className="Bank_form" pattern="[A-Za-z]{}" title="Three letter only"
                id="bank_name2" placeholder="Bank Name"
                onChange={(e)=>{
                    setBank_name(e.target.value);
                }} required></input><br/>
            

            
                <label for="branch_name" class="lb_branch_name2">Branch Name</label>
                <input type="text" className="Bank_form" 
                id="branch_name2" placeholder="Branch Name" pattern="[A-Za-z]{}" title="Three letter only"
                onChange={(e)=>{
                    setbranch_name(e.target.value);
                }} required></input><br/>
            
            
            
                 <label for="holder_name" class="lb_holder_name2">Bank Holder's Name</label>
                 <input type="text" className="Bank_form" pattern="[A-Za-z]{}" title="Three letter only"
                 id="holder_name2" placeholder="Enter Holder name"
                 onChange={(e)=>{
                    setholder_name(e.target.value);
                }} required></input><br/>
            </div>
                    
            <button type="submit" className="selct_bankBtn">Submit</button>
        </form>
    </div>
    )
}