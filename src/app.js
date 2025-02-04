import express from "express";
import cors from "cors"
import cookieParser from "cookie-parser"


const app = express();


// App Configuration

app.use(express.json({limit:"300kb"}));
app.use(express.urlencoded({limit:"200kb" , extended:true}));
app.use(express.static("public"));
app.use(cookieParser());
app.use(cors({
    origin :"",
    methods:["GET" , "DELETE" , "PUT" ,"POST"],
    credentials :true
}));


// Default Route

app.get("/", (req , res,)=>{
    console.log(req.url);

    res
    .send(`<h1>Hello Wolrd !!</h1>`)
    
})

// route Importing 
import helloRoute from "./routes/hello.route.js";

// Route Declaration
app.use("/v1" ,helloRoute)


export default app;