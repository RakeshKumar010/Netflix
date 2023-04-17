const express = require('express')
const app = express()
const dotenv = require('dotenv')
dotenv.config({path:'./config.env'})
const cors = require('cors')
app.use(cors())
app.use(express.json())
require('./db/connect')
const PORT = process.env.PORT;

app.use(require('./routes/route'))

app.listen(PORT,()=>{
    console.log(`Server is open al localhost:${PORT}`)
})