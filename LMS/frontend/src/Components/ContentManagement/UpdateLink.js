import React, { useState, useEffect } from "react"
import Axios from "axios";


export default function Update1(props) {
    const id = props.match.params.id
    console.log(id)

    const [links, setLinks] = useState([]);
    const [link, setLink] = useState("");
    const [classid, setClassid] = useState("");
    

    useEffect(() => {
        function getLink() {
            Axios.get("http://localhost:3000/link/get/" + id).then((res) => {
                console.log("Update page");
                console.log(res.data);
                setLinks(res.data);
                setLink(links["link"]);
                setClassid(links["classid"]);

            }).catch((err) => {
                alert(err.message);
            })
        }
        getLink();
    }, [])

    function UpdateData(e) {
        e.preventDefault();

        const newLink = {
            classid,
            link
        }

        Axios.put("http://localhost:3000/link/update/" + id, newLink).then(() => {
            alert("Link Updated")
            props.history.goBack();
        }).catch((err) => {
            alert(err)
        })
    }


    return (
        <div className="container" style={{minHeight: "80vh"}}>
            <form onSubmit={UpdateData}>
                <div className="mb-3">
                    <br />
                    <h5>Update Link</h5><br />

                    <label for="Textarea1">New Link</label>
                    <br />
                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="5" placeholder="Type the New Link Here.." Value={link["link"]}
                        onChange={(e) => {
                            setLink(e.target.value);
                        }}>
                    </textarea>
                </div>

                <button type="submit" class="btn btn-primary">Update</button>
            </form>
        </div>

    )
}


