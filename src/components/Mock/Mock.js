


const products =[
    {id:6, name:'7 Wonders Duel',price:22500,img:'https://cf.geekdo-images.com/WzNs1mA_o22ZWTR8fkLP2g__imagepagezoom/img/ADp01mqJWKzTCWZ6VjXhO9d2mnA=/fit-in/1200x900/filters:no_upscale():strip_icc()/pic3376065.jpg',stock:10,description:'A two players implementation of 7 Wonders', category:'twoplayergames'},
    {id:3, name:'A Feast For Odin',price:22500,img:'https://cf.geekdo-images.com/s9oGMCo1fcfV4Dk3EnqLZw__opengraph/img/-lK5MWEusIFTLH7BaYPRG_DvsME=/fit-in/1200x630/filters:strip_icc()/pic3146943.png',stock:10,description:'Euro Game', category:'strategygames'},
    {id:1, name:'Carcassonne',price:14500,img:"https://cf.geekdo-images.com/okM0dq_bEXnbyQTOvHfwRA__imagepage/img/axGbn7f0x6UUb07DmzX9hg5TwIo=/fit-in/900x600/filters:no_upscale():strip_icc()/pic6544250.png",stock:50,description:'Classic Tile-laying game', category:'gatewaygames'},
    {id:5, name:'Five Tribes',price:22500,img:'https://cf.geekdo-images.com/dmo-WD6HZHVUPrbVHunaTw__imagepagezoom/img/L_dmHftyM5kOnvxYQbejm1_I0Uo=/fit-in/1200x900/filters:no_upscale():strip_icc()/pic2055255.jpg',stock:10,description:'Mancala styled Euro Game', category:'strategygames'},
    {id:2, name:'Pandemic',price:12500,img:'https://cf.geekdo-images.com/S3ybV1LAp-8SnHIXLLjVqA__imagepage/img/kIBu-2Ljb_ml5n-S8uIbE6ehGFc=/fit-in/900x600/filters:no_upscale():strip_icc()/pic1534148.jpg',stock:20,description:'Most Popular Cooperative Game', category:'coopgames'},   
    {id:4, name:'Raptor',price:10500,img:'https://cf.geekdo-images.com/HjZ_VCPeI3vJQcEDsWLvRA__imagepagezoom/img/kAFIcA1tdFzHupCQbWeIxBZORCI=/fit-in/1200x900/filters:no_upscale():strip_icc()/pic2520016.jpg',stock:7,description:'2 player strategy-game by Bruno&Bruno', category:'twoplayergames'}
    
]

const categories =[
    {id:'coopgames', description:'Coop Games'},
    {id:'gatewaygames', description:'Gateway Games'},
    {id:'strategygames', description:'Strategy Games'},
    {id:'twoplayergames', description:'Two Player Games'}
]

export const getProducts =(category) =>{
    return new Promise((resolve,reject)=>{
        
        if(category!=null)
        {
            const prod=products.filter(p => p.category ===category)
            setTimeout(()=>{
                resolve(prod)  
            },500)
        }
        else{
            setTimeout(()=>{
                resolve(products)
            },500)
        }


    
    })
}

export const getProduct =(id) =>{

    return new Promise((resolve,reject)=>{
        const prod=products.find(p => p.id ===parseInt(id))
        setTimeout(()=>{
            resolve(prod)
        },500)
    })        
}

export const getCategories = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(categories)
        }, 500)
    })
}