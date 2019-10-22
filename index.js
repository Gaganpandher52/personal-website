const express = require('express');
const axios = require('axios');

const app = express();

// app.use(cors());

const PORT = process.env.PORT || 8080;

app.listen(PORT,() => console.log(`Listening on PORT ${PORT}`))

if(process.env.NODE_ENV ==='production'){
  App.use(Express.static('client/build'));
  App.get('*',(req,res)=>{
    res.sendFile(path.resolve(__dirname,'client','build','index.html'))
  })
}