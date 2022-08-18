import express from "express";


const app = express();
app.use(express.json());


app.listen(3333,()=>{
    console.log("App is listening on the port 3333")
});








