const router  = require("express").Router();
let NewClassRequest = require("../../models/ClassManagement/NewClassRequest");


//add a new class Request

router.post(`/save`,(req,res) =>{
    let newNewRequest = new NewClassRequest(req.body);

    newNewRequest.save((err) =>{
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

//get all new class requests

router.get("/newClassRequests", (req,res) =>{
    NewClassRequest.find().exec((err,newClassRequest)=>{
        if(err){
            return res.status(400).json({
                error:err 
            });
        }
        return res.status(200).json({
            success:true,
            existingRequests:newClassRequest
        });
    });
})

//get a specific new class request

router.get("/post/:id",(req,res) =>{
    let newClassRequestid = req.params.id;

    NewClassRequest.findById(newClassRequestid,(err,newclassrequests) =>{
        if(err){
            return res.status(400).json({success:false,err});
        
        }

        return res.status(200).json({
            success:true,
            newclassrequests

        });
    });
})

//delete a new class requests

router.delete(`/delete/:id`,(req,res) =>{
    NewClassRequest.findByIdAndRemove(req.params.id).exec((err,deletedClass) =>{
        if(err)return res.status(400).json({
            message:"Deleted Successfully",err
        });
        
        return res.json({
            message:"Deleted Successfully",deletedClass
        });
    });
});

//get user's new class requests

router.get(`/all/:idd`, (req,res) =>{
    
    let userID = req.params.idd;

    NewClassRequest.find({teacher_id : userID}).then((newClassRequest)=>{
        return res.status(200).json({
            success:true,
            existingRequests:newClassRequest
        });
    });
})

router.route("/all/all/:id").get((req,res)=>{

    let userID = req.params.id;

    NewClassRequest.find({teacher_id : userID}).then((newClassRequest)=>{
        res.json(newClassRequest) 
    }).catch((err)=>{
        console.log(err)
    })

})

//update new class request

router.put(`/update/:id`,(req,res)=>{
    NewClassRequest.findByIdAndUpdate(
        req.params.id,
        {
            $set:req.body
        },
        (err,classrequest)=>{
            if(err){
                return res.status(400).json({error:err});
            }
            return res.status(200).json({
                success:"Updated Succesfully"
            })
        }
    )
})

// router.route("/add").post((req,res) => {
    
//     const class_name = req.body.class_name;
//     const grade = Number(req.body.grade);
//     const type = req.body.type;
//     const fee = Number(req.body.fee);
//     const day = req.body.day;
//     const start_time = req.body.start_time;
//     const end_time = req.body.end_time;
//     const status = req.body.status;

//     const newNewClassRequest = new NewClassRequest({

//         class_name,
//         grade,
//         type,
//         fee,
//         day,
//         start_time,
//         end_time,
//         status

//     })

//     newNewClassRequest.save().then(() => {
//         res.json("Class added")
//     }).catch((err)=>{
//         console.log(err);
//     })

// })

// router.route("/").get((req,res) => {
//     NewClassRequest.find().then((newclassrequest) => {
//         res.json(newclassrequest)
//     }).catch((err)=>{
//         console.log(err)
//     })
// })


// router.route("/get/:id").get(async (req,res) =>{
//     let newclassrequestid = req.params.id;

//     const user = await NewClassRequest.findByID(newclassrequestid).then(() =>{
//         res.status(200).send({status: "Class fetched", user: user});
//     }).catch((err) => {
//         console.log(err.message);
//         res.status(500).send({status: "Error with delete user", user: err.message});
//     }) 
// })

//add a new class Request

// router.post(`/addd`,(req,res) =>{
//     let newNewRequest = new NewClassRequest(req.body);

//     newNewRequest.save((err) =>{
//         if(err){
//             return res.status(400).json({
//                 error:err
//             });
//         }
//         return res.status(200).json({
//             success:"Request Send"
//         });
//     });

// });

module.exports = router;