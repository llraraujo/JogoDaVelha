const express = require('express') // commonJS
const app = express ()

const cors = require('cors')
const { reset } = require('nodemon')

app.use(express.json()) //for parsing application/json
app.use(cors())

app.use(express.static('www'))

const port = 3000





app.listen (port,()=>{
    console.log(`Example app listening at http://localhost:${port}`)
})
