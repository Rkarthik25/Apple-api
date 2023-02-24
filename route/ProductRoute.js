const express=require("express")
const jwt=require("jsonwebtoken")
const {ProductModel} =require("../model/ProductModel")

const productRouter =express.Router()

productRouter.get("/",async(req,res)=>{
    const product =await ProductModel.find()
    res.send(product)
})

productRouter.post("/create",async(req,res)=>{
    const payload=req.body
    // console.log(payload)
    const post =new ProductModel(payload)
    await post.save()
    res.send({"msg":"posts created"})

})

module.exports={productRouter}