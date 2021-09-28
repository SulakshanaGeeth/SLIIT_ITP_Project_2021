const router = require("express").Router();
let Link = require("../../models/ContentManagement/Link");


router.route("/add").post((req, res) => {
    const classid = req.body.classid;
    const link = req.body.link;

    const newLink = new Link({
        classid,
        link
    })
    newLink.save().then(()=>{
        res.json("Link Added")
    }).catch((err)=>{
        console.log(err);
    })
})


router.route("/").get((req, res) => {
    Link.find().then((link) => {
        res.json(link)
    }).catch((err) => {
        console.log(err)
    })
})


router.route("/update/:linkid").put(async(req, res) => {
    let uId = req.params.linkid;
    const {id, link} = req.body;

    const updateLink = {
        id,
        link
    }

    const update = await Link.findByIdAndUpdate(uId, updateLink).then(() => {
        res.status(200).send({
            status: "Link Updated"
    }).catch((err) => {
        console.log(err);
        res.status(500).send({
            status: "Error with updating the Link"
        });
    })   
    })
})


router.route("/delete/:linkid").delete(async (req, res) => {
    let uId = req.params.linkid;

    await Link.findByIdAndDelete(uId).then(() => {
        res.status(200).send({
            status: "Link Deleted"
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

    Link.find({classid : userID}).then((link)=>{
        res.json(link) 
    }).catch((err)=>{
        console.log(err)
    })

})

module.exports = router;