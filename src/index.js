import app from "./app.js";
import { DBConnection } from "./db/connection.db.js";
import dotenv from "dotenv"

dotenv.config({path:".env"})

const port = process.env?.PORT || 3001


DBConnection()
.then( ()=>{
    app.listen(port, ()=>{
        console.log(`=> App is Runing On http://localhost:${port}`);
        
    })
} )
.catch((error)=> console.log("App not Running", error)
)