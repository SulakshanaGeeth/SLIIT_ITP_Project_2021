import {useState} from "react";
import React, {useEffect} from 'react';
import axios from 'axios';
import "./payment.css";



export default function Dropdown(props){

    const [selected, setSelected] = useState("Choose");
    var id = localStorage.getItem('teacherID');
    
    console.log(id);

    const [Acc_no,setAcc_no] = useState("");
    const [Bank_name,setBank_name] = useState("");
    const [Branch_name,setbranch_name] = useState("");
    const [Acc_Holder_name,setholder_name] = useState("");

    const [banks, setBanks] = useState([]);

    useEffect(()=>{
        function getBanks(){
            axios.get("http://localhost:3000/bank/"+id).then((res)=>{
                setBanks(res.data);
            }).catch((err)=>{
                alert(err.message);
            })
        }
        getBanks();
    },[])

    var Banks = [];
    Banks.push({"Acc_no":Acc_no,"Bank_name":Bank_name,"Branch_name":Branch_name,"Acc_Holder_name":Acc_Holder_name});


    function UpdateData(e){
        e.preventDefault();
        
        const newBank = {
            Banks
        }
        axios.put("http://localhost:3000/withdraw/update/"+id,newBank).then(()=>{
            alert("Bank Added")
            props.history.push('/WithdrawHome');
        }).catch((err)=>{
            alert(err)
        })
    }

    function GetSelect(Ano,bank,branch,holder){
        setAcc_no(Ano);
        setBank_name(bank);
        setbranch_name(branch);
        setholder_name(holder);  
    }


    
    

    const [isActive, setIsActive] = useState(false);
    
    return (
        <div class="box3">
        <button className="backbtn2" onClick={() => props.history.push("/withdraw")}>
        Back</button>
        <div className="dropdown" id="dropdown">
        
            <div className="dropdown-btn" onClick={(e)=>
            setIsActive(!isActive)}>
                {selected}
            <span className="fas fa-caret-down"></span>
            </div>
            {isActive && (
                <div className="dropdown-content">
                {banks.map((options)=>(
                    <div
                        onClick={(e)=>{
                            setSelected(options["Bank_name"]);
                            setIsActive(false);
                            GetSelect(options["Acc_no"],options["Bank_name"],options["Branch_name"],options["Acc_Holder_name"]);
                            
                        }}
                        className="dropdown-item"
                        >
                        {options["Bank_name"]}
                    </div>
                ))}
            </div>
            
            )}
</div>

            <form onSubmit={UpdateData}>
                    <div class="box2" >
                    <div className="form-group1">
                        <label for="Acc_no" class="lb_Acc_no">Account Number</label>
                        <input type="text" className="Bank_form" id="Acc_no" Value={Acc_no} disabled
                        ></input>
        
                        <label for="bank_name" class="lb_bank_name">Bank Name</label>
                        <input type="text" className="Bank_form" id="bank_name" Value={Bank_name} disabled
                        ></input>
                    
        
                        <label for="branch_name" class="lb_branch_name">Branch Name</label>
                        <input type="text" className="Bank_form" id="branch_name" Value={Branch_name} disabled
                        ></input>
                    
                         <label for="holder_name" class="lb_holder_name">Bank Holder's Name</label>
                         <input type="text" className="Bank_form" id="holder_name" Value={Acc_Holder_name} disabled
                         ></input>

                    </div>
                    </div>

                     <button type="submit" className="selct_bankBtn">Submit</button> 

                </form>
        
        </div>
        
    );
}
