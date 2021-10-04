const express = require ('express');
const question = require('../../models/StudentForm/question');
const Question = require('../../models/StudentForm/question');

const router = express.Router();

//Add Content

router.post('/question/add',(req,res)=>{

    let newQuestion = new Question(req.body);

    newQuestion.save((err) => {
        if(err){
            return res.status(400).json({
                error:err
            });
        }

        return res.status(200).json({
            success:"Question Added Successfully"
        })

    });
});

// Get Contents

router.get('/question/',(req,res)=> {
    Question.find().exec((err, question) => {

        if(err){
            return res.status(400).json({
                error:err
            });
            
        }
        return res.status(200).json({
            success:true,
            existingQuestions:question

        });
    });
});


//Update Content

router.put('/question/update/:id' ,(req,res) => {
    Question.findByIdAndUpdate(
        req.params.id,
        {
            $set:req.body
        },

        (err,Question)=> {
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
router.delete('/question/delete/:id',(req,res)=> {

    Question.findByIdAndRemove(req.params.id).exec((err,deletedQuestion)=>{
        if(err) return res.status(400).json({
            message:"Deleted Unsuccessful", err

        });

        return res.json({
            message:"Deleted Succesfully", deletedQuestion
        });
    });

});

//Retrieve Specific Content
router.get("/question/:id", (req,res) =>{

    let questionId = req.params.id;
    Question.findById(questionId, (err, question)=> {
        if (err){
            return res.status(400).json({success:false, err});

        }

        return res.status(200).json({
            success:true,
            question

        });
    });
});


module.exports = router;
