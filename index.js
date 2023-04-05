const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('Hello VENOM')
})

app.listen(4000, ()=>{
    console.log("Started server");
}
)
