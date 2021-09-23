const router = require("express").Router();
const Withdraw = require("../../models/TeacherPayment/Withdraw");

router.route("/:id").get((req,res)=>{

    let userID = req.params.id;

    Withdraw.find({Teacher_ID : userID}).then((Withdraw)=>{
        res.json(Withdraw) 
    }).catch((err)=>{
        console.log(err)
    })

})

module.exports = router;