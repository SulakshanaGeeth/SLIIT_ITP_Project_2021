const router = require("express").Router();
let Tute = require("../../models/ContentManagement/Tute");



router.route("/add").post((req, res) => {
    const id = req.body.id;
    const tute = req.body.tute;
    const name = req.body.name;

    const newTute = new Tute({
        id,
        name,
        tute        
    })
    newTute.save().then(()=>{
        res.json("Document link Added")
    }).catch((err)=>{
        console.log(err);
    })
})



router.route("/").get((req, res) => {
    Tute.find().then((tute) => {
        res.json(tute)
    }).catch((err) => {
        console.log(err)
    })
})



router.route("/update/:tuteid").put(async(req, res) => {
    let uId = req.params.tuteid;
    const {id, name, tute} = req.body;

    const updateTute = {
        id,
        name,
        tute   
    }

    const update = await Tute.findByIdAndUpdate(uId, updateTute).then(() => {
        res.status(200).send({
            status: "Document link Updated"
    }).catch((err) => {
        console.log(err);
        res.status(500).send({
            status: "Error with updating the link"
        });
    })   
    })
})



router.route("/delete/:tuteid").delete(async (req, res) => {
    let uId = req.params.tuteid;

    await Tute.findByIdAndDelete(uId).then(() => {
        res.status(200).send({
            status: "Document link Deleted"
        });
    }).catch((err) =>{
        console.log(err.message);
        res.status(500).send({
            status: "Error with deleting the link",
            error: err.message
        })
    })
})


router.route("/:id").get((req,res)=>{
    let userID = req.params.id;

    Tute.find({id : userID}).then((tute)=>{
        res.json(tute) 
    }).catch((err)=>{
        console.log(err)
    })

})

module.exports = router;