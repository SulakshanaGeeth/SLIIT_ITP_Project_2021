import React, { useState, useEffect } from "react"
import Axios from "axios";


export default function Update(props) {
    const id = props.match.params.id
    console.log(id)

    const [clsnotices, setClsnotices] = useState([]);
    const [notice, setNotice] = useState("");
    const [classid, setClassid] = useState("");


    useEffect(() => {
        function getNotice() {
            Axios.get("http://localhost:3000/clsnotice/get/" + id).then((res) => {
                console.log("Update page");
                console.log(res.data);
                setClsnotices(res.data);
                setNotice(clsnotices["notice"]);
                setClassid(clsnotices["classid"]);

            }).catch((err) => {
                alert(err.message);
            })
        }
        getNotice();
    }, [])

    function UpdateData(e) {
        e.preventDefault();

        const newNotice = {
            classid,
            notice
        }

        Axios.put("http://localhost:3000/clsnotice/update/" + id, newNotice).then(() => {
            alert("Notice Updated")
            props.history.goBack();
        }).catch((err) => {
            alert(err)
        })
    }


    return (
        <div className="container">
            <form onSubmit={UpdateData}>
                <div className="mb-3">
                    <br />
                    <h5>Update Notices</h5><br />

                    <label for="Textarea1">New Notices</label>
                    <br />
                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="5" placeholder="Type the New Notice Here.." Value={clsnotices["notice"]}
                        onChange={(e) => {
                            setNotice(e.target.value);
                        }}>
                    </textarea>
                </div>

                <button type="submit" class="btn btn-primary">Update</button>
            </form>
        </div>

    )
}


