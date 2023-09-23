const express = require('express');
const router = express();
const isWorkingHours = require ('./workingHours')



router.get('/',isWorkingHours, (req,res)=>{

    res.status(200).sendFile(process.cwd() +'\\public\\Contact.html')
})


module.exports.router = router;


