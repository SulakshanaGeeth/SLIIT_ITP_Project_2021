import React, {useState, useEffect} from "react"
import Axios from "axios";
import "./Edit.css";

export default function Update (props){

    

    //const [Data, setData] = useState();
    const id = props.match.params.id
    console.log(id)
     
    const [notice, setNotice] = useState([]);

    const [ massege,setmassege] = useState("");
    
    const [date,setdate] = useState("");
   
    useEffect(()=>{
        function getNotice(){
                Axios.get("http://localhost:3000/Notice/get/"+id).then((res)=>{
                console.log("this is Update page");
                console.log(res.data);
                setNotice(res.data);
                
                setmassege(notice["massege"]);
                setdate(notice["date"]);
                

                
            }).catch((err)=>{
                alert(err.message);
            })
        }
        getNotice();
    },[])

    function UpdateData(e){
        e.preventDefault();
        
        const newNotice = {
            massege,
           
            date
        }
        Axios.put("http://localhost:3000/Notice/update/"+id,newNotice).then(()=>{
            alert("Notice Update")
            props.history.push('/');
        }).catch((err)=>{
            alert(err)
        })
    }

        
    return(
        
        <div className="container">

        <form onSubmit={UpdateData}>
        <div className="mb-3">
          <label for="massege" class="form-label">Massege</label>
          <input type="text" class="form-control" id="massege" placeholder="Enter Notice" Value={notice["massege"]}
          onChange={(e)=>{
                
                setmassege(e.target.value);

          }}/>
          
        </div>
       
       
        <div className="mb-3">
          <label for="date" class="form-label">Date</label>
          <input type="text" class="form-control" id="date" placeholder="Enter date"defaultValue={notice["date"]}
            onChange={(e)=>{
                
                setdate(e.target.value);

          }}/>
          
        </div>
        
        <button type="submit" class="btn btn-primary">Submit</button>
        <button className="btn btn-primary" onClick={() => props.history.push("/AllNotices")}>
Back</button>
      </form>
        </div>

    )

      
  }


