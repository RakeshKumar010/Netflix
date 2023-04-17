const mongoose = require('mongoose')
const database = process.env.URL
mongoose.connect(database).then(()=>{
    console.log('Database is connected')

}).catch((err)=>{
    console.log(`Database is not connected : ${err}`)
})