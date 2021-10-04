const express = require ('express');
const Content = require('../../models/ExamContentManagement/content');

const router = express.Router();

//Add Content

router.post('/content/add',(req,res)=>{

    let newContent = new Content(req.body);

    newContent.save((err) => {
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:"Content Added Successfully "
        })
    });

});

// Get Contents
router.get('/content',(req,res)=> {
    Content.find().exec((err, content) => {
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:true,
            existingContents:content
        });
    });
});

// Retrieve a Specific Content

router.get("/content/:id", (req,res) =>{

    let contentId = req.params.id;
    Content.findById(contentId, (err, content)=> {
        if (err){
            return res.status(400).json({success:false, err});

        }
        return res.status(200).json({
            success:true,
            content

        });
    });
});

//Update Content

router.put('/content/update/:id' ,(req,res) => {
    Content.findByIdAndUpdate(
        req.params.id,
        {
            $set:req.body
        },
        (err,content)=> {
            if(err){
                return res.status(400).json({error:err});
            }
            return res.status(200).json({
                success:"Updated Succesfully"
            });
        }
    );
});

// Delete Content
router.delete('/content/delete/:id',(req,res)=> {
    Content.findByIdAndRemove(req.params.id).exec((err,deletedContent)=>{
        if(err) return res.status(400).json({
            message:"Deleted Unsuccessful", err
        });

        return res.json({
            message:"Deleted Succesfully", deletedContent
        });
    });
});



module.exports = router;