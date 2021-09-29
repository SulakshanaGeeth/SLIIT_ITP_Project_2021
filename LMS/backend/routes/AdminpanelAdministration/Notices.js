const router=require("express").Router();
let Notice =require("../../models/AdminpanelAdminstration/Notice");

//http://localhost:8070/Notice/add

router.route("/add").post((req,res)=>{
          
    const massege=req.body.massege;
    const  noticeid =req.body. noticeid ;
    const   date =req.body. date ;

    const newNotice=new Notice({

        massege,
        noticeid,
        date


    })
    newNotice.save().then(()=>{

         res.json("Notice added")

    }).catch((err)=>{

       console.log(err);

    })


  })

router.route("/").get((req,res)=>{

  Notice.find().then((notices)=>{
      res.json(notices)
  }).catch((err)=>{

    console.log(err);
  })

})
router.route("/update/:id").put(async (req,res)=>{

    let userId=req.params.id;
     const{massege,noticeid,date}=req.body;

     const updateNotice={
        massege,
        
        date

     }
     const update = await Notice.findByIdAndUpdate(userId,updateNotice).then(()=>{
         res.status(200).send({status:"user updated"} )
     }).catch((err)=>{

        console.log(err);
        res.status(500).send({status: "Error with update",error: err.massege});
    
    })
})


router.route("/delete/:id").delete(async (req,res)=>{
    let userId=req.params.id;

    await Notice.findByIdAndDelete(userId).then(() =>{

        res.status(200).send({status:"user deleted"});
    }).catch((err)=>{

        console.log(err.massege);
        res.status(500).send({status:"error with delete user",error:err.massege});
    }) 
})
router.route("/get/:id").get(async(req,res)=>{

    let userId=req.params.id;
    const user=await Notice.findById(userId).then((Notice) =>{
         
        res.status(200).send({status: "user fetched", Notice})

    }).catch(()=>{
         console.log(err.massege);
         res.status(500).send({status:"err with get user", error:err.massege});

    })
})



  module.exports =router;


    