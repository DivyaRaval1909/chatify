import express from "express";

const router = express.Router();

router.get("/signup",(req,res)=>{
    res.send("sign up ep");
})

router.get("/login",(req,res)=>{
    res.send("l in ep");
})

router.get("/logout",(req,res)=>{
    res.send("l out ep");
})




export default router;