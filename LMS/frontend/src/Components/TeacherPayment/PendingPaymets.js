import React, { useState, useEffect } from "react";
import axios from "axios";

export default function PendingPayments(props) {
  const [payment, setPayments] = useState([]);

  useEffect(() => {
    function getpayments() {
      axios
        .get("http://localhost:3000/pending_payment")
        .then((res) => {
          setPayments(res.data);
        })
        .catch((err) => {
          alert(err.message);
        });
    }
    getpayments();
  }, []);

  return (
    <div>
      <button
        className="backbtn"
        onClick={() => props.history.push("/WithdrawHome")}
      >
        Back
      </button>
      <h1 class="paywitdh1">Pending Payments</h1>

      <div className="box1">
        <table className="withdraw-table">
          <thead>
            <tr>
              <td>Teacher Name</td>
              <td>Details</td>
              <td>Amount (Rs.)</td>
              <td>State</td>
            </tr>
          </thead>

          <tbody>
            {payment.map((item) => (
              <tr>
                <td>{item.Teacher_name}</td>
                <td>
                  <button >get Details</button>
                </td>
                <td>{item.Withdraw_amout}</td>
                <td><input type="checkbox" checked data-toggle="toggle"/></td>
                
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
