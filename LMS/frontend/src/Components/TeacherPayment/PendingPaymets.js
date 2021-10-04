import React, { useState, useEffect } from "react";
import axios from "axios";
import "./payment.css";

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

  function getDetails(id) {
    // console.log(id);
    props.history.push("/teacherDetails/" + id);
  }

  function filterData(payment, SearchQry){
    const result = payment.filter((payment)=>
    payment.Teacher_name.toLowerCase().includes(SearchQry)
    )
    setPayments(result);
  }

  function Searchfunc (e) {
    const SearchQry = e.currentTarget.value;
    
    axios
        .get("http://localhost:3000/pending_payment")
        .then((res) => {
            filterData(res.data,SearchQry)
        })
        .catch((err) => {
          alert(err.message);
        });

  }

  return (
    <div>
      <button
        className="backbtn"
        onClick={() => props.history.push("/WithdrawHome")}
      >
        Back
      </button>
      <p class="paywitdh2">Pending Payments</p>
      <label className="teacherSearchLable" for="search">Search:</label>
      <input type="search" className="teacherSearch" name="searchQuery" placeholder="Enter Teacher Name" 
      onChange={Searchfunc}></input>

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
                  <button className="btn btn-outline-success" onClick={() =>getDetails(item.Teacher_ID)}>
                    Get Details</button>
                </td>
                <td>Rs. {item.Withdraw_amout}</td>
                <td>{item.State}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
