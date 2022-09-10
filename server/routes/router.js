const express = require("express");
const router = new express.Router();
const multer = require("multer");
const file = require("../models/usersSchema");
const moment = require("moment")

// img storage path
const imgconfig = multer.diskStorage({
    destination:(req,file,callback)=>{
        callback(null,"./uploads")
    },
    filename:(req,file,callback)=>{
        callback(null,`imgae-${Date.now()}. ${file.originalname}`)
    }
})


const isImage = (req,file,callback)=>{
    if(file.mimetype.startsWith("application/pdf")){
        callback(null,true)
    }else{
        callback(new Error("only pdf is allowd"))
    }
}

const upload = multer({
    storage:imgconfig,
    fileFilter:isImage
});


// user register
router.post("/register",upload.single("application/pdf"),async(req,res)=>{

    const {filename} = req.file;


    if(!filename){
        res.status(401).json({status:401,message:"fill all the data"})
    }

    try {

        const date = moment(new Date()).format("YYYY-MM-DD");

        const userdata = new file({
            imgpath:filename,

        });

        const finaldata = await userdata.save();

        res.status(201).json({status:201,finaldata});

    } catch (error) {
        res.status(401).json({status:401,error})
    }
});


// user data get
router.get("/getdata",async(req,res)=>{
    try {
        const getUser = await file.find();

        res.status(201).json({status:201,getUser})
    } catch (error) {
        res.status(401).json({status:401,error})
    }
});


// delete user data
router.delete("/:id",async(req,res)=>{

    try {
        const {id} = req.params;

        const dltUser = await file.findByIdAndDelete({_id:id});

        res.status(201).json({status:201,dltUser});

    } catch (error) {
        res.status(401).json({status:401,error})
    }

})


module.exports = router;
