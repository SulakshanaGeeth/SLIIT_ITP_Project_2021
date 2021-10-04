import React, {useState} from "react";
import axios from "axios";


export default function AddLink(props){
    const clsid = props.match.params.id
    console.log(clsid)

    const [classid, setClassid] = useState(clsid);
    const [link, setLink] = useState("");

    function sendData(e){
        e.preventDefault();

        const newLink = {
            classid,
            link
        }

        axios.post("http://localhost:3000/link/add", newLink).then(() => {
            alert("Link Added");
            props.history.goBack();
        }).catch((err) => {
            alert(err)
        })
    }

    return(
        <div style={{minHeight: "80vh"}}>
            <form onSubmit = {sendData}>   
                <div class="form-group" className="container">
                <br />
                <h5>Add Link of the Online Teaching Platform</h5><br />
                    <input type="hidden" name="id" id="id" onChange={(e => {
                        setClassid(e.target.value);
                    })}>

                    </input>

                    <label for="Textarea1">Link</label>
                    <br />

                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="5" placeholder="Add the Link Here.." required onChange = {(e => {
                        setLink(e.target.value);
                    })}></textarea>
                    <br />

                    <button type="submit" class="btn btn-primary">Add Link</button>
                </div>
                <br />
            </form>
        </div>
    )
}