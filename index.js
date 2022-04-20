const express = require ('express');
const app = express();
const port = process.env.PORT || 5000 ;

app.get('/', (req, res)=>{
    res.send ('Hello! This is my Express App with nodemon success')
});

app.listen(port, ()=>{
    console.log(`Example App Listening on port ${port}`);
})