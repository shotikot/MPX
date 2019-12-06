const express = require('express');
const router = express.Router();
const ytdl = require('ytdl-core');
const {slugify} = require('transliteration')

router.get('/', async (req,res)=>{
    try{
       const url = req.query.video;
       console.log(url)
       if(url.trim().length < 1){
           return res.status(409).send({
               message: 'მიუთითეთ ფაილის ბმული'
           })
       }
        ytdl.getInfo(url, (err,info)=>{
         if(err){
            return res.status(500).send({
                message: err.message
            })   
          }
          res.header('Content-Disposition', 'attachment; filename="'+ slugify(info.title) +'.mp3"');
          ytdl(url,{
              filter: 'audioonly'
          })
          .pipe(res)
    })
    }catch(err){
        return res.status(500).send({
            message: err.message
        })
    }
})

module.exports = router