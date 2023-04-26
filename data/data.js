
const setUrl=(req)=>{
   const vegetables = [
        {
          id:1,
          ext:'CRT',
          Name:'Carrot',
          type:'Vegetables',
          desc:"Crisp and colorful, a perfect snack for any time of day! Best and Chepeast price from use dont miss it.",
          price:15,
          src:req + 'carrot.jpg'
        },
        {
            id:2,
            ext:'BT',
            Name:'Beet Root',
            type:'Vegetables',
            desc:"A powerhouse of nutrients in a vibrant, earthy package. Best and Chepeast price from use dont miss it.",
            price:20,
            src:req + 'beetroot.jpg'

        },
        {
            id:3,
            ext:'CRL',
            Name:'Coliflour',
            type:'Vegetables',
            desc:"Versatile and delicious, it's the veggie that's anything but boring. Best and Chepeast price from use dont miss it.",
            price:30,
            src:req + 'cauli-flower.jpg'

        }
        ,
        {
            id:4,
            ext:'TMT',
            Name:'Tomatoes',
            desc:"Versatile and delicious, it's the veggie that's anything but boring. Best and Chepeast price from use dont miss it.",
            type:'Vegetables',
            price:25,
            src:req + 'tomatoes.jpeg'

        },
        {
            id:5,
            ext:'BRC',
            Name:'Brocoli',
            type:'Vegetables',
            price:35,
            src:req + 'brocoli.jpg',
            desc:"Green, crunchy, and oh so good for you – make broccoli your go-to veggie. Best and Chepeast price from use dont miss it."

        },
        {
            id:6,
            ext:'BNS',
            Name:'Beans',
            type:'Vegetables',
            desc:"Protein-packed and oh so satisfying, beans are a vegetarian's best friend. Best and Chepeast price from use dont miss it.",
            price:10,
            src:req + 'beans.jpg'

        }
        ,     {
            id:7,
            ext:'PTS',
            Name:'Potatoes',
            type:'Vegetables',
            price:40,
            desc:"Whether mashed, baked, or fried, potatoes are the ultimate comfort food. Best and Chepeast price from use dont miss it.",
            src:req + 'potatoes.jpg'

        }
        ,     {
            id:8,
            ext:'CBG',
            Name:'Cabbage',
            type:'Vegetables',
            price:33,
            src:req + 'Cabbage.jpg',
            desc:"Crisp and crunchy, this leafy veggie is perfect for salads or slaws. Best and Chepeast price from use dont miss it."

        },
        {
            id:9,
            ext:'PPR',
            Name:'Pepper',
            type:'Vegetables',
            price:45,
            src:req + 'pepper.jpg',
            desc:"Add some color and crunch to your meals with sweet or spicy peppers. Best and Chepeast price from use dont miss it.",


        },
        {
            id:10,
            ext:'MSH',
            Name:'Mushroom',
            type:'Vegetables',
            price:25,
            src:req + 'mushroom.jpg',
            desc:"Earthy and flavorful, mushrooms are a must-have in any kitchen. Best and Chepeast price from use dont miss it."

        },
        {
            id:11,
            ext:'ON',
            Name:'Onion',
            type:'Vegetables',
            price:50,
            src:req + 'onion.jpeg'
            ,desc:"The aromatic staple that adds depth and flavor to any dish Best and Chepeast price from use dont miss it.",

        },
        {
            id:12,
            ext:'CRN',
            Name:'Corn',
            type:'Vegetables',
            price:80,
            src:req + 'corn.jpg',
            desc:"Sweet and juicy, fresh corn is the taste of summer in every bite. Best and Chepeast price from use dont miss it."

        },
        {
            id:13,
            ext:'SPR',
            Name:'Sprouts',
            type:'Vegetables',
            price:45,
            src:req + 'sprouts.jpg'
            ,desc:"Tender and delicate, sprouts add a fresh and nutritious crunch to any dish. Best and Chepeast price from use dont miss it.",

        },
        {
            id:14,
            ext:'GRL',
            Name:'Garlic',
            type:'Vegetables',
            price:38,
            src:req + 'garlic.jpg',
            desc:"Pungent and flavorful, garlic adds depth and richness to any meal. Best and Chepeast price from use dont miss it.",

        },
        {
            id:15,
            ext:'BNN',
            Name:'Banana',
            type:'Fruit',
            price:25,
            src:req + 'banana.jpg',
            desc:"The perfect on-the-go snack – sweet, creamy, and packed with potassium. Best and Chepeast price from use dont miss it."

        },
        {
            id:16,
            ext:'APL',
            Name:'Apple',
            type:'Fruit',
            price:50,
            src:req + 'apple.jpg',
            desc:"Crisp, juicy, and oh so satisfying – the ultimate snack any time of day. Best and Chepeast price from use dont miss it.",

        },
        {
            id:17,
            ext:'RSP',
            Name:'Rasperry',
            type:'Fruit',
            price:10,
            src:req + 'raspberry.jpg'
            ,desc:"Tangy and sweet, raspberries are a burst of summer in every bite. Best and Chepeast price from use dont miss it.",

        },

        {
            id:18,
            ext:'PER',
            Name:'Pears',
            type:'Fruit',
            price:60,
            src:req + 'pears.jpg',
            desc:"Soft, juicy, and oh so sweet – pears are the perfect fall fruit.. Best and Chepeast price from use dont miss it."

        },
        {
            id:19,
            ext:'ORG',
            Name:'Orange',
            type:'Fruit',
            price:55,
            src:req + 'orange.png',
            desc:"Bright and juicy, oranges are a refreshing and healthy snack any time of day. Best and Chepeast price from use dont miss it."

        },
        {
            id:20,
            ext:'MNG',
            Name:'Mango',
            type:'Fruit',
            price:65,
            src:req + 'mango.jpg',
            desc:"Sweet and tropical, mangoes are a taste of paradise in every bite. Best and Chepeast price from use dont miss it.",

        },
        {
            id:21,
            ext:'PA',
            Name:'PineApple',
            type:'Fruit',
            price:100,
            src:req + 'pine-apple.jpg',
            desc:"Tropical and juicy, pineapples add a burst of flavor to any dish. Best and Chepeast price from use dont miss it.",

        },
        {
            id:22,
            ext:'GRP',
            Name:'Graphes',
            type:'Fruit',
            price:120,
            src:req + 'graphes.png',
            desc:"Small and mighty, grapes are packed with flavor and nutrients. Best and Chepeast price from use dont miss it.",

        },
        {
            id:23,
            ext:'KV',
            Name:'Kivi Fruit',
            type:'Fruit',
            price:65,
            src:req + 'kivi.jpg',
            desc:"Tangy and refreshing, kiwi fruit adds a pop of color and flavor to any dish. Best and Chepeast price from use dont miss it.",

        },
        {
            id:24,
            ext:'STR',
            Name:'Straweberry',
            type:'Fruit',
            price:20,
            src:req + 'strawberry.png',
            desc:"Sweet and juicy, strawberries are the perfect summertime treat. Best and Chepeast price from use dont miss it."

        },


     ]
     return vegetables
}


export default  setUrl