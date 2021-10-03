const express = require("express");
const notes = require("./data/notes");
const dotenv = require("dotenv");




const connectDB = require("./config/db");
const userRoutes =require("./routes/userRoutes");
const noteRoutes =require("./routes/noteRoutes");
const { notFound, errorHandler } = require("./middlewares/errorMiddleware");


const bankRouter = require("./routes/TeacherPayment/bank");
const withdrawRouter = require("./routes/TeacherPayment/withdraw");
const withdrawPaymentRouter = require("./routes/TeacherPayment/withdraw_payment");
//const classRouter = require("./routes/TeacherPayment/classTest");
const pending_payment_Router = require("./routes/TeacherPayment/pending_payments");

//Class Management
const classRouter = require("./routes/ClassManagement/newclassrequest");
const classesRouter = require("./routes/ClassManagement/classes.js");
const UpdateRouter = require("./routes/ClassManagement/updateclassrequest.js");

//Content Management
const noticeRouter = require("./routes/ContentManagement/notice.js");
const linkRouter = require("./routes/ContentManagement/link.js");
const tuteRouter = require("./routes/ContentManagement/tute.js");
// const classesRouter = require("./routes/ContentManagement/classes.js");

//Admin panel administration
const NoticeRouter =  require("./routes/AdminpanelAdministration/Notices");

//StudentForam
const questionRoutes = require('./routes/StudentForm/questions');



const app = express();
dotenv.config();
connectDB();
app.use(express.json());

app.get("/",(req,res)=>{
res.send("API is running..");
});

//app.get("/api/notes",(req,res)=>{
  // res.json(notes);
    //});

    //app.get("/api/notes/:id",(req,res)=>{
      //  const note =notes.find((n)=>n._id ==req.params.id);    
     //   res.send(note);
   // });

app.use("/api/users",userRoutes);
app.use("/api/notes",noteRoutes);



app.use("/bank",bankRouter);
app.use("/withdraw",withdrawRouter);
app.use("/withdrawPayment",withdrawPaymentRouter);
//app.use("/classes",classRouter);
app.use("/pending_payment",pending_payment_Router);


//Class Management
app.use("/newclassrequest", classRouter);
app.use("/classes", classesRouter);
app.use("/updateclassrequest", UpdateRouter);


//jaliya
app.use("/clsnotice", noticeRouter);
app.use("/link", linkRouter);
app.use("/tute", tuteRouter);
// app.use("/classes", classesRouter);

//admin panel
app.use("/Notice",NoticeRouter);

//StudentForam
app.use(questionRoutes);


app.use(notFound);
app.use(errorHandler);
const PORT =process.env.PORT || 5000;

app.listen(PORT,console.log(`server Start on port ${PORT}`));














