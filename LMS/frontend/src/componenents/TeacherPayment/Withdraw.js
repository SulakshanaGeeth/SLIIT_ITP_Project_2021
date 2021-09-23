import React, { useState, useEffect } from "react";
import axios from "axios";
import "./payment.css";

export default function Withdraw(props) {
  const [classes, setClasses] = useState([]);

  var tid = localStorage.getItem("teacherID");

  var Request_date = new Date().toLocaleDateString();
  var state = "pending";


  var Teacher_ID = tid;
  var Teacher_name= localStorage.getItem('teacherName');

  useEffect(() => {
    function getClasses() {
      axios
        .get("http://localhost:3000/withdraw/" + tid)
        .then((res) => {
          setClasses(res.data);
        })
        .catch((err) => {
          alert(err.message);
        });
    }
    getClasses();
  }, []);

  function sendData(e) {
    e.preventDefault();

    const payment = {
      Teacher_ID,
      Teacher_name,
      Classes,
      deductAmount,
      withdrawAmount,
      Request_date,
      state
      
    };
    axios
      .post("http://localhost:3000/withdraw/add", payment)
      .then(() => {
        alert("Added");
        props.history.push("selectbank/" + tid);
      })
      .catch((err) => {
        alert(err);
      });
  }


  var Classes = [];
  var Totalamount=0;
  var deductAmount=0;
  var withdrawAmount=0;


  return (
    <div>
      <button className="backbtn" onClick={() => props.history.push("/WithdrawHome")}>
        Back</button>
      <h1 class="paywitdh1">Payment Withdrawal</h1>
      
      <div className="box1">
        <table className="withdraw-table">
          <thead>
          <tr>
          <td>#</td>  
            <td>Class Name</td>
            <td>Grade</td>
            <td>No of Students</td>
            <td>Class Fee</td>
            <td>Total Amount Rs.</td>
          </tr>
          </thead>
          
          <tbody>
            {classes.map((item) => (
            <tr Acc_no={item.Name}>
              <td>
              {Classes.push({
                Subject: item.subject,
                Grade: item.grade,
                Class_fee: item.fee,
                No_of_students: item.no_of_students,
              })}
              </td>
              <td>{item.subject}</td>
              <td>{item.grade}</td>
              <td>{item.no_of_students}</td>
              <td>{item.fee}</td>
              {/* <td>{item.Total_Amount}</td> */}
              <td>{item.no_of_students*item.fee}</td>
              <p hidden>{Totalamount=Totalamount+item.no_of_students*item.fee}</p>
              
            </tr>
           ))}
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td>{Totalamount}</td>
            </tr>
            </tbody>
            
          
        </table>
      </div>
      <p hidden>{deductAmount=Totalamount*0.2}</p>
      <p hidden>{withdrawAmount=Totalamount-deductAmount}</p>
      <h3 class="displyAmount">Deduct Amount for Institute: Rs.{deductAmount}</h3>
      <h3 class="displyAmount">Total Amount for withdraw: Rs.{withdrawAmount}</h3>
      <button type="button" className="withNextbtn" onClick={sendData}>
        Next
      </button>
    </div>
  );
}
