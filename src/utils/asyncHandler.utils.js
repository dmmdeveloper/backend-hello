
export const asyncHandler = (fnx)=>{

return (req, res, next)=>{
    Promise
    .resolve( fnx(req,res,next) )
    .catch( (error) => next(error) )
}

} //highr Orderd Function 


const asyncHandle =  (fnx)=>{
return async (req , res , next)=>{
    try {
        await fnx(req,res , next);
    } catch (error) {
        
        next(error)
    }
}

}