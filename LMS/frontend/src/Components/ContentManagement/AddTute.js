import React, {useState} from "react";
import axios from "axios";


export default function AddTute(props){
    const clsid = props.match.params.id
    console.log(clsid)

    const [id, setId] = useState(clsid);
    const [name, setName] = useState("");
    const [tute, setTute] = useState("");


    function sendData(e){
        e.preventDefault();

        const newTute = {
            id,
            name,
            tute            
        }

        axios.post("http://localhost:3000/tute/add", newTute).then(() => {
            alert("Tute Uploaded");
            props.history.goBack();
        }).catch((err) => {
            alert(err)
        })
    }

    return(
        <div>
            <form onSubmit={sendData}>
                <div class="form-group" className="container">
                    <br />
                    <h5>Upload Document</h5><br />
                    <input type="hidden" name="id" id="id" onChange={(e => {
                        setId(e.target.value);
                    })}>
                        
                    </input>

                    <label for="Textarea1">Name of the Document</label>
                    <br />

                    <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Name of the Document.." required onChange={(e => {
                        setName(e.target.value);
                    })}/>
                    <br /><br />

                    <label for="Textarea1">Add Drive Link of the Document</label>
                    <br />
                    
                    <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Add the Drive Link Here.." required onChange={(e => {
                        setTute(e.target.value);
                    })} />
                    <br />

                    <button type="submit" class="btn btn-primary">Upload</button>
                </div>
                <br />
            </form>
        </div>
    )
}