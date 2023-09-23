const express = require("express")
const app = express()
const port = 3000;

const {router:homeRouter } = require('./routes/home')
const {router:contactRouter } = require('./routes/contact')
const {router:servicesRouter } = require('./routes/services')

app.use('/home',homeRouter)
app.use('/services',servicesRouter)
app.use('/contact',contactRouter)
  
app.listen(port, () => console.log(`server run on ${port}`));