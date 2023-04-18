
const setUrl=(req)=>{
   const vegetables = [
        {
          id:1,
          ext:'CRT',
          Name:'Carrot',
          type:'Vegetables',
          price:23,
          src:req + 'carrot.jpg'
        },
        {
            id:2,
            ext:'BT',
            Name:'Beet Root',
            type:'Vegetables',
            price:23,
            src:req + 'beetroot.jpg'

        },
        {
            id:3,
            ext:'CRL',
            Name:'Coliflour',
            type:'Vegetables',
            price:23,
            src:req + 'cauli-flower.jpg'

        }
        ,
        {
            id:4,
            ext:'TMT',
            Name:'Tomatoes',
            type:'Vegetables',
            price:23,
            src:req + 'tomatoes.jpeg'

        },
        {
            id:5,
            ext:'BRC',
            Name:'Brocoli',
            type:'Vegetables',
            price:23,
            src:req + 'brocoli.jpg'

        },
        {
            id:6,
            ext:'BNS',
            Name:'Beans',
            type:'Vegetables',
            price:23,
            src:req + 'beans.jpg'

        }
        ,     {
            id:7,
            ext:'PTS',
            Name:'Potatoes',
            type:'Vegetables',
            price:23,
            src:req + 'potatoes.jpg'

        }
        ,     {
            id:8,
            ext:'CBG',
            Name:'Cabbage',
            type:'Vegetables',
            price:23,
            src:req + 'Cabbage.jpg'

        },
        {
            id:9,
            ext:'PPR',
            Name:'Pepper',
            type:'Vegetables',
            price:23,
            src:req + 'pepper.jpg'

        },
        {
            id:10,
            ext:'MSH',
            Name:'Mushroom',
            type:'Vegetables',
            price:23,
            src:req + 'mushroom.jpg'

        },
        {
            id:11,
            ext:'ON',
            Name:'Onion',
            type:'Vegetables',
            price:23,
            src:req + 'onion.jpg'

        },
        {
            id:12,
            ext:'CRN',
            Name:'Corn',
            type:'Vegetables',
            price:23,
            src:req + 'corn.jpg'

        },
        {
            id:13,
            ext:'SPR',
            Name:'Sprouts',
            type:'Vegetables',
            price:23,
            src:req + 'sprouts.jpg'

        },
        {
            id:14,
            ext:'GRL',
            Name:'Garlic',
            type:'Vegetables',
            price:23,
            src:req + 'garlic.jpg'

        },
        {
            id:15,
            ext:'BNN',
            Name:'Banana',
            type:'Fruit',
            price:23,
            src:req + 'banana.jpg'

        },
        {
            id:16,
            ext:'APL',
            Name:'Apple',
            type:'Fruit',
            price:23,
            src:req + 'apple.jpg'

        },
        {
            id:17,
            ext:'STR',
            Name:'Straweberry',
            type:'Fruit',
            price:23,
            src:req + 'stawberries.jpg'

        },
        {
            id:18,
            ext:'PER',
            Name:'Pears',
            type:'Fruit',
            price:23,
            src:req + 'pears.jpg'

        },
        {
            id:19,
            ext:'ORG',
            Name:'Orange',
            type:'Fruit',
            price:23,
            src:req + 'orange.jpg'

        },
        {
            id:20,
            ext:'MNG',
            Name:'Mango',
            type:'Fruit',
            price:23,
            src:req + 'mango.jpg'

        },
        {
            id:21,
            ext:'PA',
            Name:'PineApple',
            type:'Fruit',
            price:23,
            src:req + 'pine-apple.jpg'

        },
        {
            id:22,
            ext:'GRP',
            Name:'Graphes',
            type:'Fruit',
            price:23,
            src:req + 'graphes.png'

        },
        {
            id:23,
            ext:'RSP',
            Name:'Rasperry',
            type:'Fruit',
            price:23,
            src:req + 'raspberry.jpg'

        },


     ]
     return vegetables
}


export default  setUrl