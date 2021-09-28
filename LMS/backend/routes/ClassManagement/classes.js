const router  = require("express").Router();
let Classes = require("../../models/ClassManagement/Classes");


//add a new class

router.post(`/save`,(req,res) =>{
    let newClass = new Classes(req.body);

    newClass.save((err) =>{
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

//get all new classes

router.get("/classes", (req,res) =>{
    Classes.find().exec((err,newClasses)=>{
        if(err){
            return res.status(400).json({
                error:err 
            });
        }
        return res.status(200).json({
            success:true,
            existingRequests:newClasses
        });
    });
})

//get a specific class 

router.get("/class/:id",(req,res) =>{
    let newClassid = req.params.id;

    Classes.findById(newClassid,(err,classes) =>{
        if(err){
            return res.status(400).json({success:false,err});
        
        }

        return res.status(200).json({
            success:true,
            classes

        });
    });
})

//delete a class

router.delete(`/delete/:id`,(req,res) =>{
    Classes.findByIdAndRemove(req.params.id).exec((err,deletedClass) =>{
        if(err)return res.status(400).json({
            message:"Deleted Successfully",err
        });
        
        return res.json({
            message:"Deleted Successfully",deletedClass
        });
    });
});

//update class 

router.put(`/update/:id`,(req,res)=>{
    Classes.findByIdAndUpdate(
        req.params.id,
        {
            $set:req.body
        },
        (err,classes)=>{
            if(err){
                return res.status(400).json({error:err});
            }
            return res.status(200).json({
                success:"Updated Succesfully"
            })
        }
    )
})


//get user's classes

router.get(`/all/:idd`, (req,res) =>{
    
    let userID = req.params.idd;

    Classes.find({teacher_id : userID}).then((newClassRequest)=>{
        return res.status(200).json({
            success:true,
            existingRequests:newClassRequest
        });
    });
})



router.route("/class/class/:id").get((req, res) => {

    Classes.find().then((classes) => {

        res.json(classes)

    }).catch((err) => {

        console.log(err)

    })

})

router.route(`/class/get/:id`).get(async(req,res)=>{
    let userId = req.params.id;

    const user = await Classes.findById(userId)
    .then((classes) =>{
        res.status(200).send({status: "Notice fetched", classes})
    }).catch((err) => {
        console.log(err.message);
        res.status(500).send({status: "Error with fetching notice", error:err.message});
    })
})


module.exports = router;