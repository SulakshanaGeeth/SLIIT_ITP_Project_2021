import React, { useState, useEffect } from "react";
import axios from "axios";
import "./payment.css";

export default function PendingPayments(props) {

  const tid = props.match.params.id;
  var Totalamount=0;

  const [details, setDetails] = useState([]);

  useEffect(() => {
    function getdetails() {
      axios
        .get("http://localhost:3000/withdrawPayment/" + tid)
        .then((res) => {
          setDetails(res.data);
        })
        .catch((err) => {
          alert(err.message);
        });
    }
    getdetails();
  }, []);

  var State = "Transferred";

    function UpdateData(e){
        e.preventDefault();
        const newState = {
            State
        }
        
        axios.put("http://localhost:3000/withdraw/updateState/"+tid,newState).then(()=>{
            alert("State Updated")
            props.history.push('/pendingPayments');
        }).catch((err)=>{
            alert(err)
        })
    }

  return (
    <div >
      <button className="backbtn"
        onClick={() => props.history.push("/pendingPayments")}
      >Back</button>
      <h1 class="Displaywitdh1">Details of Request Payment</h1>

      <div className="dtBoxMain">
        {details.map((item) => (
          <div className="DisplayDetails">
            <div className="dtBoxTeacher">
            <p className="ddTeacherName">Teacher name : {item.Teacher_name}</p>
            </div>
            <div className="dtBoxBank">
                
                <p>Bank Details</p>
                <p>Account No : {item.Banks[0].Acc_no}</p>
                <p>Bank Name : {item.Banks[0].Bank_name}</p>
                <p>Branch Name : {item.Banks[0].Branch_name}</p>
                <p>Account Holder's Name: {item.Banks[0].Acc_Holder_name}</p>
            </div>
            <div className="dtBoxTable">
            <p>Conducted Class List</p>
            <table border = "1">
            <thead >
              <tr>
                <th>Subject</th>
                <th>Grade</th>
                <th>Class Fee (Rs.)</th>
                <th>No of students</th>
                <th>Total Amount (Rs.)</th>
              </tr>
            </thead>
            <tbody >
            {item.Classes.map((item2) => (
              
              <tr>
              <td>{item2.Subject}</td>
              <td>{item2.Grade}</td>
              <td>Rs.{item2.Class_fee}</td>
              <td>{item2.No_of_students}</td>
              <td>Rs.{item2.Class_fee*item2.No_of_students}</td>
              <p hidden>{Totalamount=Totalamount+item2.Class_fee*item2.No_of_students}</p>
              </tr>
               
            ))}
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td>Rs.{Totalamount}</td>
            </tr>
            </tbody>
            </table>
            </div>
            <div className="dtBoxAmount">
                <p>Deducted Amount : Rs.{item.Deduct_amount}</p>
                <p>Total payable amount : Rs.{item.Withdraw_amout}</p>
            </div>
          </div>
        ))}
        <div className="dtBoxButton">
        <button className="dtMarkTrans" onClick={UpdateData}
        >Mark as Transferred</button>
        
        </div>
      </div>
      
    </div>
  );
}
