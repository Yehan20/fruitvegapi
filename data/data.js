import { fileURLToPath } from 'url';
import os from 'os'
import path from 'path';

const setUrl=(req)=>{
   const vegetables = [
        {
          id:1,
          Name:'Carrot',
          type:'Vegetables',
          price:23,
          src:req + 'Ferns.jpg'
        },
        {
            id:2,
            Name:'Beet Root',
            type:'Vegetables',
            price:23,
            src:req + 'Ferns.jpg'

        },
        {
            id:3,
            Name:'Cabbege',
            type:'Vegetables',
            price:23,
            src:req + 'Ferns.jpg'

        }
        ,
        {
            id:4,
            Name:'Tomatoes',
            type:'Vegetables',
            price:23,
            src:req + 'Ferns.jpg'

        },
        {
            id:5,
            Name:'Brocoli',
            type:'Vegetables',
            price:23,
            src:req + 'Ferns.jpg'

        },
        {
            id:6,
            Name:'Beans',
            type:'Vegetables',
            price:23,
            src:req + 'Ferns.jpg'

        }
        ,     {
            id:7,
            Name:'Potatoes',
            type:'Vegetables',
            price:23,
            src:req + 'Ferns.jpg'

        }
        ,     {
            id:8,
            Name:'Cabbage',
            type:'Vegetables',
            price:23,
            src:req + 'Ferns.jpg'

        },
        {
            id:9,
            Name:'Beet',
            type:'Vegetables',
            price:23,
            src:req + 'Ferns.jpg'

        },
        {
            id:10,
            Name:'Mushroom',
            type:'Vegetables',
            price:23,
            src:req + 'Ferns.jpg'

        },
        {
            id:11,
            Name:'Onion',
            type:'Vegetables',
            price:23,
            src:req + 'Ferns.jpg'

        },
        {
            id:12,
            Name:'Corn',
            type:'Vegetables',
            price:23,
            src:req + 'Ferns.jpg'

        },
        {
            id:13,
            Name:'Sprouts',
            type:'Vegetables',
            price:23,
            src:req + 'Ferns.jpg'

        },
        {
            id:14,
            Name:'Garlic',
            type:'Vegetables',
            price:23,
            src:req + 'Ferns.jpg'

        },
        {
            id:15,
            Name:'Banana',
            type:'Fruit',
            price:23,
            src:req + 'Ferns.jpg'

        },


     ]
     return vegetables
}


export default  setUrl