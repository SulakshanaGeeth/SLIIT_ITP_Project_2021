const router = require("express").Router();
let ClassTest = require("../../models/TeacherPayment/Classes");

router.route("/add").post((req,res)=>{

    
    const teacher_id = req.body.teacher_id;
    const teacher_name = req.body.teacher_name;
    const class_name = req.body.class_name;
    const subject = req.body.subject;
    const grade = req.body.grade;
    const type = req.body.type;
    const fee = req.body.fee;
    const day = req.body.day;
    const start_time = req.body.start_time;
    const end_time = req.body.end_time;
    const status = req.body.status;
    const no_of_students = req.body.no_of_students;

    const newClass = new ClassTest({

        teacher_id,
        teacher_name,
        class_name,
        subject,
        grade,
        type,
        fee,
        day,
        start_time,
        end_time,
        status,
        no_of_students
    })

    newClass.save().then(()=>{
        res.json("Class Added")
    }).catch((err)=>{
        console.log(err);
    })

})

router.route("/").get((req,res)=>{

    ClassTest.find().then((classTest)=>{
        res.json(classTest) 
    }).catch((err)=>{
        console.log(err)
    })

})





module.exports = router;

