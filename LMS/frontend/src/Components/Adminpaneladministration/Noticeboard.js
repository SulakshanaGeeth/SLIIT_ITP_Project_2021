import React,{useState,useEffect} from "react";
import axios from "axios";
import "./Edit.css"


const initialState = {
    massege: "",
    date: "",
    
  };



export default function AllNotices(props){
    const [notices ,  setNotices] = useState([]);

    

    useEffect(()=>{
        function getNotices(){

            axios.get("http://localhost:3000/Notice/").then((res)=>{
               setNotices(res.data);

            }).catch((err)=>{

                alert(err.message);
            })
        }

        getNotices();

    },[])
   
    function filterData(notices, SearchQry){
        const result = notices.filter((notices)=>
        notices.massage.toLowerCase().includes(SearchQry),
        notices.date.toLowerCase().includes(SearchQry),
        
       
        
        )
        setNotices(result);
      }
      function Searchfunc (e) {
        const SearchQry = e.currentTarget.value;
        
        axios
            .get("http://localhost:3000/Notice/")
            .then((res) => {
                filterData(res.data,SearchQry)
            })
            .catch((err) => {
              alert(err.message);
            });
    
      }
    
    

     return(
      <div className="container">
            <div class="content">
            <input type="search" name="searchQuery" onChange={Searchfunc}></input>
        <h1 class="paywitdh1">Notice board</h1>
        
  
        <div className="box1">
          <table className="withdraw-table">
            <thead>
              <tr>
                                
                <td>Massege</td>
                <td>Date</td>
               
              </tr>
            </thead>
  
            <tbody>
              {notices.map((item)=> (
                <tr>
                
                 
                  <td>{item.massege}</td>
                  <td>{item.date}</td>
                  
                 
                  
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      </div>
    

     )



}
