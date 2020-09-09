const express = require('express')
const {db} = require('./models/models') 

const app = express()

const { usersRoute } = require('./routes/users')
const { postsRoute } = require('./routes/posts')

app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use('/api/users', usersRoute)
app.use('/api/posts', postsRoute)
app.use('/', express.static(__dirname + '/public'))

db.sync({force:true}).then(()=>{
    app.listen(4444,()=>{
        console.log('server has started on http://localhost:4444')
    })
}).catch((err)=>{
    console.error(new Error('Database Not Started'))
    console.error(err)
})