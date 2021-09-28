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
    
    console.log(id)



{/* Notice */}
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


    {/* Link */}
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


        {/* tute */}
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

    function View3(id) {
        console.log(id)
        props.history.push("/" + id)
    }


    return (
        <div className="container">
            <div class="#" className="container">
                <br />
                
                <div>               
                {classes.map(item =>
                            <h2 style={{textAlign:"center"}}>{item.class_name}</h2>
                        )}
                </div>
                <br />

                <h5>Notices</h5><br />
                <div class="border border-dark">
                    <ul>
                        {notice.map(item =>
                            <li>
                                <h6><span>{item.notice}</span></h6>
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
                            </>
                        )}
                    </ul>
                </div>
                <br /><br />

                <h5>Lessons and Tutorials</h5><br />
                <div class="border border-dark">
                    <ol>
                        {tute.map(item =>
                            <li>
                                <h6>{item.name} :
                                <a href={`${item.tute}`}> {item.tute} </a><br />
                                </h6>
                            </li>
                        )}
                    </ol>
                </div>
                <br /><br />
            </div>
        </div>
    )
}