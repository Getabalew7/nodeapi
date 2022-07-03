import express from "express";
import bodyParser from "body-parser";
import usersRouter from './routers/users.js'


const app= express();
app.use(bodyParser.json())


app.use('/api',usersRouter)


app.listen(3000, function(){
    console.log("server is running at port 3000")
})