import React, { useState, useEffect } from "react";
import axios from "axios";
import "./payment.css";

export default function AllBanks(props) {
  const [banks, setBanks] = useState([]);

  var id = localStorage.getItem('teacherID');

  console.log(id);

  useEffect(() => {
    function getBanks() {
      axios
        .get("http://localhost:3000/bank/"+id)
        .then((res) => {
          console.log(res.data);
          setBanks(res.data);
        })
        .catch((err) => {
          alert(err.message);
        });
    }
    getBanks();
  }, []);

  function Update(id) {
    console.log(id);
    props.history.push("/bank/update/" + id);
  }

  function Delete(id) {
    const confirmBox = window.confirm(
      "Do want to delete this Bank Details ?"
    )
    if (confirmBox === true) {
      console.log(id);
      props.history.push("/bank/delete/" + id);
    }
    else{
      props.history.push("/bank/");
    }
    
  }

  function Addroute(){  
    props.history.push("/add");
  }

  console.log("All banks Page");
  console.log(banks);

  return (
    <div className="allbanks">
      <button className="backbtn" onClick={() => props.history.push("/WithdrawHome")}>
        Back</button>
      <h1 class="bankdetailsh2">Bank Accounts</h1>
      
      <div className="box1">
        <table className="bank-table">
          <thead>
          <tr>
                <td>Account Number</td>
                <td>Bank Name</td>
                <td>Bank Name</td>
                <td>Account Holder's Name</td>
                <td>Edit Details</td>
                <td>Delete Details</td>

            </tr>
            </thead>  
  
            
            {banks.map(item => (
              <tbody>
                
                    <tr Acc_no={item.Acc_no}>
                        <td>{item.Acc_no}</td>
                        <td>{item.Bank_name}</td>
                        <td>{item.Branch_name}</td>
                        <td>{item.Acc_Holder_name}</td>
                        <td><button type="button" className="btn btn-success mr-2 mb-4" 
                            onClick={() =>Update(item._id)}>Edit</button></td>
                        <td><button type="button" className="btn btn-success mr-2 mb-4"
                        onClick={() =>Delete(item._id)}>Delete</button></td>
        
                    </tr>
                    </tbody>
                ))}
                
        </table>
      </div>
      <div>
        <button class="bankadd_btn" onClick={() =>props.history.push("/bank/add")}>
          Add New Bank Account</button>
      </div>
    </div>
  );
}
