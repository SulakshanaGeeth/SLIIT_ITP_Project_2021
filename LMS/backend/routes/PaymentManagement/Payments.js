const router = require("express").Router();
let Payment = require("../../models/PaymentManagement/payment")

 //http:localhost:8070/Payment/add

router.route("/add").post((req,res)=>{

    const name = req.body.name;
    const cardNumber = Number(req.body.cardNumber);
    const ExpireDate = Number(req.body.ExpireDate);
    const cvv = Number(req.body.cvv);

    const newPayment = new Payment({

        name,
        cardNumber,
        ExpireDate,
        cvv
    })

    newPayment.save().then(()=>{
        res.json("Payment successful")
    }).catch((err)=>{
        console.log(err);
    })
})

//fetch data

router.route("/get/:id").get(async (req, res)=> {
    let userId = req.params.id;
  const user =  await Payment.findById(userId)
    .then(()=>{
        res.status(200).send({status: "User fetched", user: user})
    }).catch(()=> {
        console.log(err.message);
        res.status(500).send({status: "Error with get user", error: err.message});
})
})

module.exports = router;