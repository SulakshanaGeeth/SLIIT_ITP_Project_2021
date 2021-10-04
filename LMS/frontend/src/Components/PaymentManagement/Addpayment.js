import React, {useState} from "react";
import axios from "axios";

export default function Addpayment() {

    const [name,setName] = useState("");
    const [cardNumber,setCardNumber] = useState("");
    const [ExpireDate,setExpireDate] = useState("");
    const [cvv,setCvv] = useState("");

    function sendData(e){
    e.preventDefault();
alert("insert")

const newPayment ={
    name,
    cardNumber,
    ExpireDate,
    cvv
}

axios.post("http://localhost:3000/Payment/add",newPayment).then(()=>{
    alert("Details Added")
}).catch((err)=>{
    alert(err)
})




    }


    return(
        <div style={{marginLeft:10}} style={{minHeight: "80vh"}} >
            
        <div  className="container">
<div className="padding" >
    <form onSubmit={sendData}>
              
    <div className="form-group" classNameName="container"  >
            <br />
            <center>
            <h3>PAYMENT</h3><br />
            </center>
            </div>
    
            
           
    <div className="row" >
        <div className="col-sm-6">
            <div className="card">
                <div className="card-header">
                    <strong>Credit Card</strong>
                    <small>enter your card details</small>
                </div>
                <div className="card-body">
                    <div className="row">
                        <div className="col-sm-12">
                            <div className="form-group">
                                <label for="name">Name</label>
                                <input className="form-control" id="name" type="text" placeholder="Enter your name"
                                onChange={(e)=>{
                                    setName(e.target.value);
                
                                        }}  />
                            </div>
                        </div>
                    </div>


                    <div className="row">
                        <div className="col-sm-12">
                            <div className="form-group">
                                <label for="ccnumber">Credit Card Number</label>
                                <div className="input-group">
                                    <input className="form-control" type="text" placeholder="0000 0000 0000 0000"required autocomplete="email"
                                    onChange={(e)=>{
                                        setCardNumber(e.target.value);
                    
                                            }} />
                                    <div className="input-group-append">
                                        <span className="input-group-text">
                                            <i className="mdi mdi-credit-card"></i>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        
                        <div className="form-group col-sm-4">
                        
                <label for="cc-exp" class="control-label">CARD EXPIRY</label> 
                <input id="cc-exp" type="tel" class="input-lg form-control cc-exp" autocomplete="cc-exp" placeholder="__ /__" required
               onChange={(e)=>{
                setExpireDate(e.target.value);

                    }}/> 
                
                </div>
                            
                           
                        <div className="col-sm-4">
                            <div className="form-group">
                                <label for="cvv">CVV/CVC</label>
                                <input className="form-control" id="cvv" type="text" placeholder="123"required
                                onChange={(e)=>{
                                    setCvv(e.target.value);
                
                                        }}/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card-footer">
                    <button className="btn btn-sm btn-success float-right" type="submit">
                        <i className="mdi mdi-gamepad-circle"></i> Proceed</button>
                    <button className="btn btn-sm btn-danger" type="reset">
                        <i className="mdi mdi-lock-reset"></i>Retry</button>
                </div>                
            </div>
          </div>
      </div>
  </form>
  </div>
</div>
</div>










    )






    
}