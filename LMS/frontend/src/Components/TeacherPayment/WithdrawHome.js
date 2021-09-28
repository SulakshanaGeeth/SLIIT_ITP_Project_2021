import React, { useState, useEffect } from "react";
import axios from "axios";
import "./payment.css";

export default function WithdrawHome(props) {
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
    <div className="WithdrawHome">
      
      <button
        className="backbtn"
        onClick={() => props.history.push("/WithdrawHome")}
      >
        Back
      </button>
      <h1 className="Withdrawhomeh1">Payment Withdraw</h1>
      <button className="wdh1" onClick={() => props.history.push("/bank/")}>
        Bank Details
      </button>
      <br />

      <div>
        {details.map((item) => (
          <p hidden>{(state = item.State)}</p>
        ))}
        {(() => {
          if (state == "pending") {
            return (
              <div>
                <button
                  className="wdh2"
                  onClick={() => props.history.push("/withdraw")}
                  disabled
                >
                  Payment Withdrawal{" "}
                </button>
              </div>
            );
          } else if (state == null) {
            return (
              <div>
                <button
                  className="wdh2"
                  onClick={() => props.history.push("/withdraw")}
                >
                  Payment Withdrawal{" "}
                </button>
              </div>
            );
          } else {
            return (
              <div>
                <button
                  className="wdh2"
                  onClick={() => props.history.push("/withdraw")}
                >
                  Payment Withdrawal{" "}
                </button>
              </div>
            );
          }
        })()}
        )
      </div>

      <button
        className="wdh3"
        onClick={() => props.history.push("/WithdrawPayment")}
      >
        Payments
      </button>
      <br />
    </div>
  );
}
