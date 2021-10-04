import React, { useState, useEffect } from "react";
import axios from "axios"


export default function Body(props) {
    const id = props.match.params.id
    console.log(id)

    {/* View class name */ }
    const [classes, setClass] = useState([]);
    useEffect(() => {
        function getClass() {
            axios.get("http://localhost:3000/classes/class/get/" + id).then((res) => {
                    console.log(res.data);
                    setClass(res.data);

                }).catch((err) => {
                    alert(err.message);
                });
        }
        getClass();
    }, []);
    console.log(id)


    {/* Notice */ }
    const [notice, setNotices] = useState([]);
    var id1 = localStorage.getItem('id');
    console.log(id);


    useEffect(() => {
        function getNotices() {
            axios
                .get("http://localhost:3000/clsnotice/" + id)
                .then((res) => {
                    console.log(res.data);
                    setNotices(res.data);
                })
                .catch((err) => {
                    alert(err.message);
                });
        }
        getNotices();
    }, []);


    {/* Link */ }
    const [link, setLinks] = useState([]);
    var id1 = localStorage.getItem('id');
    console.log(id);

    useEffect(() => {
        function getLinks() {
            axios
                .get("http://localhost:3000/link/" + id)
                .then((res) => {
                    console.log(res.data);
                    setLinks(res.data);
                })
                .catch((err) => {
                    alert(err.message);
                });
        }
        getLinks();
    }, []);


    {/* tute */ }
    const [tute, setTute] = useState([]);
    var id1 = localStorage.getItem('id');
    console.log(id);

    useEffect(() => {
        function getTute() {
            axios
                .get("http://localhost:3000/tute/" + id)
                .then((res) => {
                    console.log(res.data);
                    setTute(res.data);
                })
                .catch((err) => {
                    alert(err.message);
                });
        }
        getTute();
    }, []);


    {/*relavent to notices*/ }
    function Update(id) {
        console.log(id)
        props.history.push("/content/updatenotice/" + id)
    }

    function Delete(id) {
        axios.delete("http://localhost:3000/clsnotice/delete/" + id).then(() => {
            alert("Notice Deleted");
            window.location.reload();
        }).catch((err) => {
            console.log(err)
        })
    }


    {/*relavent to links*/ }
    function Update1(id) {
        console.log(id)
        props.history.push("/content/updatelink/" + id)
    }

    function Delete1(id) {
        axios.delete("http://localhost:3000/link/delete/" + id).then(() => {
            alert("Link Deleted");
            window.location.reload();
        }).catch((err) => {
            console.log(err)
        })
    }


    {/*relavent to tute*/ }
    function Delete2(id) {
        axios.delete("http://localhost:3000/tute/delete/" + id).then(() => {
            alert("Document Deleted");
            window.location.reload();
        }).catch((err) => {
            console.log(err)
        })
    }

//search
    function filterData(tute, SearchQry){
        const result = tute.filter((tute)=>
        tute.name.toLowerCase().includes(SearchQry)||
        tute.name.includes(SearchQry)        
        )
        setTute(result);
      }
      function Searchfunc (e) {
        const SearchQry = e.currentTarget.value;
        
        axios.get("http://localhost:3000/tute/" + id).then((res) => {
                filterData(res.data,SearchQry)
            })
            .catch((err) => {
              alert(err.message);
            });   
      }

    return (
        <div className="container" style={{minHeight: "80vh"}}>
            <div class="#" className="container">
                <br /><br />

                {/* <div>               
                {classes.map(item =>
                            <h2 style={{textAlign:"center"}}>{item.class_name}</h2>
                        )}
                </div> */}
                
                <div style={{paddingLeft:270}}>
                <a class="btn btn-dark" href={`/content/addNotice/${id}`} role="button">Add Notice</a>&nbsp; 
                <a class="btn btn-dark" href={`/content/addLink/${id}`} role="button">Add Link</a>&nbsp; 
                <a class="btn btn-dark" href={`/content/addTute/${id}`} role="button">Upload Tutorials</a>&nbsp; 
                {/*<a class="btn btn-dark" href={`/content/studentView/${id}`} role="button">Student View</a>&nbsp;*/}
                <a class="btn btn-dark" href={`/content/contentreport/${id}`} role="button">Generate Report</a>
                <br /><br />
                </div>

                <h5>Notices</h5><br />
                <div class="border border-dark">
                    <ul>
                        {notice.map(item =>
                            <li>
                                <h6><span>{item.notice}</span></h6>

                                <button class="btn btn-secondary disabled, btn btn-primary btn-sm" role="button" aria-disabled="true"
                                    onClick={() => Update(item._id)}>Edit</button>&nbsp; 
                                <button class="btn btn-secondary disabled, btn btn-primary btn-sm" role="button" aria-disabled="true"
                                    onClick={() => Delete(item._id)}>Delete</button>
                            </li>
                        )}
                    </ul>
                </div>
                <br /><br />

                <h5>Online Teaching Platform Links</h5><br />
                <div class="border border-dark">
                    <ul>
                        {link.map(item =>
                            <>
                                <h6><em>{item.link}</em></h6>

                                <button class="btn btn-secondary disabled, btn btn-primary btn-sm" role="button" aria-disabled="true"
                                    onClick={() => Update1(item._id)}>Edit</button>&nbsp; 
                                <button class="btn btn-secondary disabled, btn btn-primary btn-sm" role="button" aria-disabled="true"
                                    onClick={() => Delete1(item._id)}>Delete</button>
                            </>
                        )}
                    </ul>
                </div>
                <br /><br />

                <h5>Lessons and Tutorials</h5><br />
            
                <div className = "col-lg-3 mt-2 mb-2">
                <input type="search" name="searchQuery" className = "form-control" placeholder="Search.." onChange={Searchfunc}></input>
                </div>
                <br />

                <div class="border border-dark">
                    <ol>
                        {tute.map(item =>
                            <li>
                                <h6>{item.name} :
                                <a href={`${item.tute}`}> {item.tute} </a><br />
                                <button class="btn btn-secondary disabled, btn btn-primary btn-sm" role="button" aria-disabled="true"
                                        onClick={() => Delete2(item._id)}>Delete</button></h6>
                            </li>
                        )}
                    </ol>
                </div>
                <br /><br />
            </div>
        </div>
    )
}