const router = require("express").Router();
let Notice = require("../../models/ContentManagement/Notice");



router.route("/add").post((req, res) => {
    const classid = req.body.classid;
    const notice = req.body.notice;

    const newNotice = new Notice({
        classid,
        notice
    })
    newNotice.save().then(()=>{
        res.json("Notice Added")
    }).catch((err)=>{
        console.log(err);
    })
})


router.route("/").get((req, res) => {
    Notice.find().then((notice) => {
        res.json(notice)
    }).catch((err) => {
        console.log(err)
    })
})



router.route("/update/:noticeid").put(async(req, res) => {
    let uId = req.params.noticeid;
    const {id, notice} = req.body;

    const updateNotice = {
        id,
        notice
    }

    const update = await Notice.findByIdAndUpdate(uId, updateNotice).then(() => {
        res.status(200).send({
            status: "Notice Updated"
    }).catch((err) => {
        console.log(err);
        res.status(500).send({
            status: "Error with updating notice"
        });
    })   
    })
})



router.route("/delete/:noticeid").delete(async (req, res) => {
    let uId = req.params.noticeid;

    await Notice.findByIdAndDelete(uId).then(() => {
        res.status(200).send({
            status: "Notice Deleted"
        });
    }).catch((err) =>{
        console.log(err.message);
        res.status(500).send({
            status: "Error with delete notice",
            error: err.message
        })
    })
})


router.route("/get/:id").get(async(req,res)=>{
    let userId = req.params.id;

    const user = await Notice.findById(userId).then((user) =>{
        res.status(200).send({status: "Notice fetched", user: user})
    }).catch((err) => {
        console.log(err.message);
        res.status(500).send({status: "Error with fetching notice", user: err.message});
    })
})


router.route("/:id").get((req,res)=>{
    let userID = req.params.id;

    Notice.find({classid : userID}).then((notice)=>{
        res.json(notice) 
    }).catch((err)=>{
        console.log(err)
    })

})

module.exports = router;