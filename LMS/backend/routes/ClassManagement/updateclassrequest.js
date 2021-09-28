const router  = require("express").Router();
let NewUpdateRequest = require("../../models/ClassManagement/UpdateClassRequest");


//add a update class Request

router.post(`/save`,(req,res) =>{
    let newUpdateRequest = new NewUpdateRequest(req.body);

    newUpdateRequest.save((err) =>{
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:"Request Send"
        });
    });

});



module.exports = router;


