import setUrl from '../data/data.js'


let imageUrl , vegetables;

export const runMiddleWhere = (req,res,next)=>{
    console.log(req.protocol)
    imageUrl=( req.get('host') + "/images/" )
    vegetables =setUrl(imageUrl);
    next()
}

export const getAllItems = (req,res)=>{

    res.status(200).json(vegetables)
}

export const getSingelItem =(req,res)=>{
    let id =(req.params.id)
    console.log(id);

    let singleItem  = vegetables.filter((vegetable)=>vegetable.ext === id)[0]

    if(singleItem){
        res.status(200).json(singleItem)
        return 
    }
    res.status(500).json({message:'not found'})
 
}
