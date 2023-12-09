const express = require('express');
const connectDB =require ('./config/database.js');


const app = express();

app.listen(3000, async () => {
     console.log("server started");
    await connectDB();
    console.log("mongodb connected ");
})