const router = require("express").Router();
let freeCard = require("../../models/PaymentManagement/freeCard");

//insert

http://localhost:8070/freeCard/add
router.route("/add").post((req,res)=>{

    const request = req.body.request;
 
    const newRequest = new freeCard({

        request
    })

    newRequest.save().then(()=>{
        res.json("Request successful")
    }).catch((err)=>{
        console.log(err);
    })
})

//view

http://localhost:8070/freeCard

router.route("/").get((req,res) =>{

    freeCard.find().then((requests)=>{
        res.json(requests)
      }).catch((err)=>{
          console.log(err)
      })
})

//update

http://localhost:8070/freeCard/update/:id
router.route("/update/:id").put(async (req,res) =>{
    let userId = req.params.id;
    const {request} = req.body;

    const updateRequest = {
        request
    }
    
    const update = await freeCard.findByIdAndUpdate(userId, updateRequest)
    .then(() => {

    res.status(200).send({status: "Request updated", user: update })
   }).catch((err) => {
       console.log(err);
       res.status(500).send({status: "Error with updating data", error: err.message});
   })
}) 

//delete
http://localhost:8070/freeCard/delete/:id
router.route("/delete/:id").delete(async (res,req)=>{
    let userId = req.params.id;

    await freeCard.findByIdAndDelete(userId).then(()=>{
        res.status(200).send({status: "Request deleted"});
    }).catch((err) => {
        console.log(err);
        res.status(500).send({status: "Error with delete data", error: err.message });
    })
})

//fetch data

router.route("/get/:id").get(async (req, res)=> {
    let userId = req.params.id;
  const user =  await freeCard.findById(userId)
    .then(()=>{
        res.status(200).send({status: "Request fetched", user: user})
    }).catch(()=> {
        console.log(err.message);
        res.status(500).send({status: "Error with get request", error: err.message});
})
})

module.exports = router;