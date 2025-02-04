import { APIREsponse } from "../utils/apiresponse.utils.js";
import { asyncHandler } from "../utils/asyncHandler.utils.js";


const hello = asyncHandler (  async (req , res)=>{
    console.log(req.url);



    res.status(200)
    .json(
        new APIREsponse("Hello World " , "Hello Wolrd Controller ", 200)
    )
    
} )


export {hello}