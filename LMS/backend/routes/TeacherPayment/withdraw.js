const router = require("express").Router();
let Classes = require("../../models/ClassManagement/Classes");
const Withdraw = require("../../models/TeacherPayment/Withdraw");


router.route("/:id").get((req,res)=>{

    let userID = req.params.id;


    Classes.find({teacher_id : userID}).then((classes)=>{
        res.json(classes) 
    }).catch((err)=>{
        console.log(err)
    })

})

router.route("/add").post((req,res)=>{

    
    const Teacher_ID = req.body.Teacher_ID;
    const Teacher_name = req.body.Teacher_name;
    const Banks = req.body.Banks;
    const Classes = req.body.Classes;
    const Deduct_amount = Number(req.body.deductAmount);
    const Withdraw_amout = Number(req.body.withdrawAmount);
    const Request_date = req.body.Request_date;
    const State = req.body.state;
   
    const newWithdraw = new Withdraw({
        Teacher_ID,
        Teacher_name,
        Classes,
        Deduct_amount,
        Withdraw_amout,
        Request_date,
        State
    })

    newWithdraw.save().then(()=>{
        res.json("Withdraw Added")
    }).catch((err)=>{
        console.log(err);
    })

})

router.route("/update/:id").put(async(req,res)=>{
    
    let ID = req.params.id;
    
    const {Banks}=req.body;

    const updatePayment ={
        
        Banks
    }

    const update = await Withdraw.findOneAndUpdate({Teacher_ID: ID},updatePayment)
    .then(()=>{
        res.status(200).send({status: "Payment updated"})
    }).catch((err)=>{
        console.log(err);
        res.status(500).send({status: "Error with updating data", error: err.message});
    })


})


router.route("/updateState/:id").put(async(req,res)=>{
    
    let ID = req.params.id;
    
    const {State}=req.body;

    const updateState ={
        
        State
    }

    const update = await Withdraw.findOneAndUpdate({Teacher_ID: ID},updateState)
    .then(()=>{
        res.status(200).send({status: "State updated"})
    }).catch((err)=>{
        console.log(err);
        res.status(500).send({status: "Error with updating data", error: err.message});
    })


})

module.exports = router;