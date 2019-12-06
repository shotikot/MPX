const express = require('express');
const router = express.Router();
const ytdl =  require('ytdl-core');
router.get('/', (req,res)=>{
    try{
        res.render('main');
    }catch(err){
        return res.status(500).send({
            message: err.message
        })
    }
})

router.post('/convert', async (req,res)=>{
    try{
       const url = req.body.url;
       if(url.trim().length < 1){
           return res.status(409).send({
               message: 'შეავსეთ ბმულის ველი'
           });
       } 
       ytdl.getInfo(url, (err,info)=>{
           if(err){
               return res.status(500).send({
                   message: err.message
               })
           }
           return res.status(200).send({
               url: url,
               title: info.title,
               id: info.video_id,
           })
       })
    }catch(err){
        return res.status(500).send({
            message: err.message
        })
    }
})

module.exports = router