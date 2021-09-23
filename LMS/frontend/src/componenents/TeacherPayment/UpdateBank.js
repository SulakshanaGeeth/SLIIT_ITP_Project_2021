import React, {useState, useEffect} from "react"
import Axios from "axios";


export default function UpdateBank (props){

    const id = props.match.params.id;

    console.log(id);
     
    const [bank, setBank] = useState([]);

    const [Acc_no,setAcc_no] = useState("");
    const [Bank_name,setBank_name] = useState("");
    const [Branch_name,setbranch_name] = useState("");
    const [Acc_Holder_name,setholder_name] = useState("");

    
    
    useEffect(()=>{
        function getBank(){
                Axios.get("http://localhost:3000/bank/get/"+id).then((res)=>{
                console.log("this is Update page");
                console.log(res.data);
                setBank(res.data);
                setAcc_no(bank["Acc_no"]);
                setBank_name(bank["Bank_name"]);
                setbranch_name(bank["Branch_name"]);
                setholder_name(bank["Acc_Holder_name"]);

                
            }).catch((err)=>{
                alert(err.message);
            })
        }
        getBank();
    },[])

    function UpdateData(e){
        e.preventDefault();
        
        const newBank = {
            Acc_no,
            Bank_name,
            Branch_name,
            Acc_Holder_name
        }
        Axios.put("http://localhost:3000/bank/update/"+id,newBank).then(()=>{
            alert("Bank Update")
            props.history.push('/bank/');
        }).catch((err)=>{
            alert(err)
        })
    }

        
    return(
        

        <div className="updateBank">
            
        <button className="backbtn" onClick={() => props.history.push("/bank/")}>
        Back</button>
        <h1 class="bankdetailsh1">Update Bank Details</h1>
            
            <form onSubmit={UpdateData}>

                    <div className="form-group2">
                        <label for="Acc_no" class="lb_Acc_no2">Account Name</label>
                        <input type="text" className="Bank_form" id="Acc_no2" Value={bank["Acc_no"]}
                        onChange={(e)=>{
                            setAcc_no(e.target.value);
                        }}></input><br/>
        
                    
                        <label for="bank_name" class="lb_bank_name2">Bank Name</label>
                        <input type="text" className="Bank_form" id="bank_name2" Value={bank["Bank_name"]}
                        onChange={(e)=>{
                            setBank_name(e.target.value);
                        }}></input><br/>
                    
 
                        <label for="branch_name" class="lb_branch_name2">Branch Name</label>
                        <input type="text" className="Bank_form" id="branch_name2" defaultValue={bank["Branch_name"]}
                        onChange={(e)=>{
                            setbranch_name(e.target.value);
                        }}></input><br/>
                    
                    
                         <label for="holder_name" class="lb_holder_name2">Bank Holder's Name</label>
                         <input type="text" className="Bank_form" id="holder_name2" defaultValue={bank["Acc_Holder_name"]}
                         onChange={(e)=>{
                            setholder_name(e.target.value);
                        }}></input>
                        
                    </div>

                     <button type="submit" className="selct_bankBtn">Submit</button> 
                </form>
                
    </div>
    )
  }
