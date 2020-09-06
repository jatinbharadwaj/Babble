const express = require('express')
const {db} = require('./models/models') 

const app = express()



db.sync({force:true}).then(()=>{
    app.listen(4444,()=>{
        console.log('server has started on http:localhost:4444')
    })
}).catch((err)=>{
    console.error(new Error('Database Not Started'))
    console.error(err)
})