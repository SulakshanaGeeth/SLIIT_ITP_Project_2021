import React, { useState } from "react";
import axios from "axios";


export default function AddNotice(props) {
    const clsid = props.match.params.id
    console.log(clsid)

    const [notice, setNotice] = useState("");
    const [classid, setClassid] = useState(clsid);

    function sendData(e) {
        e.preventDefault();

        const newNotice = {
            classid,
            notice
        }

        axios.post("http://localhost:3000/clsnotice/add", newNotice).then(() => {
            alert("Notice Added");
            props.history.goBack();        
        }).catch((err) => {
            alert(err)
        })
    }

    return (
        <div>
            <form onSubmit={sendData}>           
                <div class="form-group" className="container">
                <br />
                <h5>Add Notices</h5><br />
                    <input type="hidden" name="id" id="id" onChange={(e => {
                        setClassid(e.target.value);
                    })}>

                    </input>
                                        
                    <label for="Textarea1">Notice</label>
                    <br />

                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="5" placeholder="Type Notice Here.." required onChange={(e => {
                        setNotice(e.target.value);
                    })}>
                    </textarea>
                    <br />

                    <button type="submit" class="btn btn-primary">Add Notice</button>
                </div>
            </form>
        </div>
    )
}