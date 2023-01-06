// import stormtrooperTShirt from './images/stormtrooperTShirt.jpg';
// import totoroHoop from './images/totoroHoop.jpg';
// import portraitHoop from './images/portraitHoop.jpeg';
// import siaHoop from './images/siaHoop.jpg';


const AVAILABLE_PRODUCTS = [
  {
    id: 1,
    name: "JOJO'S BIZARRE ADVENTURE",
    description: "STONE OCEAN JOTARO PURPLE TEE",
    image: "https://cdn.shopify.com/s/files/1/0070/1700/5113/products/TSM1QMFJOJ_1_1600x.png?v=1670272919",
    price: 39,
  },

  {
    id: 2,
    name: "DRAGON BALL Z",
    description: "DRAGON BALL Z SOCKS BOX SET",
    image: "https://cdn.shopify.com/s/files/1/0070/1700/5113/products/CRM2739DBZ_1_1600x.png?v=1669762471",
    price: 29,
  },

  {
    id: 3,
    name: "BERSERK",
    description: "GUTS BLACK TIE DYE TEE",
    image: "ttps://cdn.shopify.com/s/files/1/0070/1700/5113/products/TSM549JCRU_1_1600x.png?v=1666191132",
    price: 150,
  },

  {
    id: 4,
    name: "CYBERPUNK: EDGERUNNERS",
    description: "LUCY BLACK LONG SLEEVE",
    image: "https://cdn.shopify.com/s/files/1/0070/1700/5113/products/LSM5GAXCPR_1_1600x.png?v=1666638980",
    price: 70,
  },

  {
    id: 5,
    name: "ONE PIECE FILM: RED",
    description: "ONE PIECE FILM: RED GROUP BLACK LONG SLEEVE",
    image: "https://cdn.shopify.com/s/files/1/0070/1700/5113/products/LSA5CJ8OPR_1_1600x.png?v=1665000326",
    price: 80,
  },
  {
    id: 6,
    name: "DORAEMON",
    description: "DORAEMON SLING BAG",
    image: "https://cdn.shopify.com/s/files/1/0070/1700/5113/products/LSM2DVSJOJ_1_1600x.png?v=1666812782",
    price: 90,
  },
  {
    id: 7,
    name: "DRAGON BALL",
    description: "KAME HOUSE VARSITY JACKET",
    image: "https://cdn.shopify.com/s/files/1/0070/1700/5113/products/OWM1YAADBO_1_1600x.png?v=1671134365",
    price: 110,
  },
  {
    id: 8,
    name: "ONE PIECE",
    description: "STRAW HATS HOODED SHIRT",
    image: "https://cdn.shopify.com/s/files/1/0070/1700/5113/products/HDM2CYSONP_1_1600x.png?v=1670970302",
    price: 1000,
  },
  {
    id: 9,
    name: "NARUTO",
    description: "KAKASHI MINI CONVERTIBLE BACKPACK",
    image: "https://cdn.shopify.com/s/files/1/0070/1700/5113/products/MPF1LJ1NAR_1_1600x.png?v=1671207066",
    price: 20,
  },
  {
    id: 10,
    name: "TOKYO GHOUL",
    description: "KEN KANEKI SLIDES",
    image: "https://cdn.shopify.com/s/files/1/0070/1700/5113/products/MSA1F6GTGH_1_1600x.jpg?v=1671223537",
    price: 70,
  },
  {
    id: 11,
    name: "MY HERO ACADEMIA X HELLO KITTY",
    description: "MY HERO ACADEMIA X HELLO KITTY TIE DYE LOUNGE SET",
    image: "https://cdn.shopify.com/s/files/1/0070/1700/5113/products/CMF1V2NMHK-ecomm_1600x.jpg?v=1668013257",
    price: 80,
  },
  {
    id: 12,
    name: "HAIKYU!",
    description: "KARASUNO HIGH BLACK JOGGERS",
    image: "https://cdn.shopify.com/s/files/1/0070/1700/5113/products/ZTM0AP0CRU_1600x.png?v=1635188",
    price: 90,
  },
  {
    id: 13,
    name: "SPY X FAMILY",
    description: "THE FORGERS BLACK JOGGERS",
    image: "https://cdn.shopify.com/s/files/1/0070/1700/5113/products/ZTM2L71CRU_front_1600x.png?v=1658261056",
    price: 590,
  },
  {
    id: 14,
    name: "HUNTER X HUNTER",
    description: "HUNTER X HUNTER COLOR BLOCK ANORAK",
    image: "https://cdn.shopify.com/s/files/1/0070/1700/5113/products/OWM1W6AHXH_ecomm_1600x.jpg?v=1668526313",
    price: 510,
  },
  {
    id: 15,
    name: "YU YU HAKUSHO",
    description: "YUYU HAKUSHO COLOR BLOCK ANORAK",
    image: "https://cdn.shopify.com/s/files/1/0070/1700/5113/products/OWM1W6EYYH_ecomm_1600x.jpg?v=1668526678",
    price: 30,
  },
  {
    id: 16,
    name: "HUNTER X HUNTER",
    description: "HUNTER X HUNTER COLOR BLOCK ANORAK",
    image: "https://cdn.shopify.com/s/files/1/0070/1700/5113/products/OWM1W6AHXH_ecomm_1600x.jpg?v=1668526313",
    price: 50,
  },
 
];

export default AVAILABLE_PRODUCTS;
