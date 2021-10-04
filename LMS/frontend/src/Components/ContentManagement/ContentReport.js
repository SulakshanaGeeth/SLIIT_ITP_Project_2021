import React, { useState, useEffect } from "react";
import axios from "axios"
import jsPDF from "jspdf";
import "./../../App.css";

const initialState = {
    name: "",
    date: "",
}

export default function ContentReport(props) {
    const [tutes, setTutes] = useState([]);
    //var id = localStorage.getItem('id');
    const id = props.match.params.id
    console.log(id);

    useEffect(() => {
        function getTute() {
            axios.get("http://localhost:3000/tute/" + id).then((res) => {
                    //console.log(res.data);
                    setTutes(res.data);
                })
                .catch((err) => {
                    alert(err.message);
                });
        }
        getTute();
    }, []);

   function generatePDF() {
        var doc = new jsPDF("|", "mm", [1120, 900]);
        //var doc = new jsPDF('protrait','px','a4','false');
        //var doc = new jsPDF('landscape','px',[750,700],false);
        doc.html(document.querySelector("#Content"), {
            callback: function(pdf){
                var pageCount = doc.internal.getNumberOfPages(1);
                pdf.deletePage(pageCount);
                pdf.save("ContentReport.pdf");
            }
        });
    };


    return (
        <div style={{minHeight: "80vh"}}>
            <div class="form-group" className="container">
            <div id = "Content" style={{paddingLeft:25}}>
                <br />
                <h2>Report about the Added Tutorials</h2>
                <br />

                <table class="table">
                    <thead class="thead-dark">
                        <tr>
                            <th scope="col" style={{width:150}}>No.</th>
                            <th scope="col" style={{width:220}}>Document Name</th>
                            <th scope="col">Drive Link</th>
                        </tr>
                    </thead>
                    <tbody>
                        {tutes.map((item, index) => (
                            <tr>
                                <td>{index+1}</td>
                                <td>{item.name}</td>
                                <td>{item.tute}</td>
                            </tr>
                        ))}
                    </tbody>
                     </table>
                     <br />
                     </div>
            <button type="submit" class="btn btn-primary" onClick={generatePDF} type = "primary">Download</button>
                <br /><br />            
            </div>
        </div>
    )
}