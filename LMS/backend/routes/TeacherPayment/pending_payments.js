const router = require("express").Router();
const Withdraw = require("../../models/TeacherPayment/Withdraw");

router.route("/").get((req,res)=>{

    Withdraw.find().then((withdraw)=>{
        res.json(withdraw) 
    }).catch((err)=>{
        console.log(err)
    })

})

module.exports = router;