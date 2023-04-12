import setUrl from '../data/data.js'

let imageUrl , vegetables;

export const runMiddleWhere = (req,res,next)=>{
    imageUrl=(req.protocol+ ":" + req.get('host') + "/public/images/" )
    vegetables =setUrl(imageUrl);
    next()
}

export const getAllItems = (req,res)=>{
    console.log('hi');
    console.log(vegetables);
    res.status(200).json(vegetables)
}

export const getSingelItem =(req,res)=>{
    let id = Number(req.params.id)
    console.log(id);

    let singleItem  = vegetables.filter((vegetable)=>vegetable.id === id)[0]

    if(singleItem){
        res.status(200).json(singleItem)
        return 
    }
    res.status(500).json({message:'not found'})
 
}
