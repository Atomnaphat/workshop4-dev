const express = require('express')
const app = express()

app.get('/',(req, res) =>{
    res.send('Hello')
})

app.get('/about',(req, res) =>{
    res.send("you are genius (>3<)")
})


app.get('*',(req, res) =>{
    res.sendFile(__dirname+'/pic/404.jpg')
})


app.listen(3000, () => {
    console.log("Start Server at Port [3000]")
})