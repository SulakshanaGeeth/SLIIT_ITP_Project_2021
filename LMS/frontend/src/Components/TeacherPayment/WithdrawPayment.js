import React, { useState, useEffect } from "react";
import axios from "axios";
import "./payment.css";

export default function Withdraw(props) {

var tid = localStorage.getItem("teacherID");
var state = "";
  
const [details, setDetails] = useState([]);

console.log(details);

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

  return (
    <div style={{minHeight: "580px"}}>
      <button className="backbtn" onClick={() => props.history.push("/WithdrawHome")}>
        Back</button>
      <h1 class="paywitdh1">Request Payments</h1>

      <div className="box1">
        <table className="withdraw-table">
          <thead>
          <tr>
            <td>Date</td>  
            <td>Amount Rs.</td>
            <td>State</td>
            <td>Get a report</td>
          </tr>
          </thead>
          
          <tbody>
            {details.map((item) => (
            <tr>
              
              <td>{item.Request_date}</td>
              <td>{item.Withdraw_amout}</td>
              <td>{item.State}</td>


              <p hidden>{(state = item.State)}</p>


              {(() => {
          if (state == "pending") {
            return (
              <td>
                <button className="btn btn-outline-success" onClick={() => props.history.push("/teacherGetReport/"+tid)} disabled>
                  Get Report
                </button>
              </td>
            );
          } else {
            return (
              <td>
                <button className="btn btn-outline-success" onClick={() => props.history.push("/teacherGetReport/"+tid)}>
                  Get Report
                </button>
              </td>
            );
          }
        })()}
            

            </tr>
           ))}
            
            </tbody>
            
          
        </table>
      </div>
      
    </div>
  );
}
