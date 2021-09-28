import React, { useState, useEffect } from "react";


function EditNotice(props) {
    const [notice, setNotices] = useState({});

    useEffect(()=>{
        fetch ("http://localhost:3000/clsnotice/" + props.match.params._id)
            .then(res => res.json())
            .then(
                (result) => {
            setNotices(result);
        }
        );
    });
    function changeNotice(e){

    }

    return (
        <div class="form-group" className="container">
                    <h5>Edit Notices</h5><br />
                    <br /><br />

                    {/*<label for="Textarea1">ID</label>
                    <br /><br />
                    <input type="text" name="id" value={notice.id} onChange={changeNotice}> </input>
    <br /><br />*/}

                    <label for="Textarea1">Add Notices</label>
                    <br /><br />
                    <textarea class="form-control" id="exampleFormControlTextarea1" name="notice" rows="5" value={notice.notice} onChange={changeNotice}> </textarea>
                    <br />

                    <button type="submit" class="btn btn-primary">Add Notice</button>
                </div>
    );

}

export default EditNotice;
