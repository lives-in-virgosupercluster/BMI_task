
export default function handler(req,res){
    const {method}=req;
    if(method==="POST"){
        const {weight,height}=req.body;
        res.status(200).json({weight,height});
    }

}