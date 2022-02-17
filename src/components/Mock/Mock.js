


const products =[
    {id:1, name:'Carcassonne',price:14500,img:"https://m.media-amazon.com/images/I/812D90aXxUS._AC_SL1500_.jpg",stock:50,description:'Tile-laying game', category:'twoplayergames'},
    {id:2, name:'Pandemic',price:12500,img:'https://target.scene7.com/is/image/Target/GUEST_0313f621-d762-4e1d-9855-e32163314488?wid=488&hei=488&fmt=pjpeg',stock:20,description:'Cooperative Game', category:'strategygames'},
    {id:3, name:'A Feast For Odin',price:22500,img:'https://cf.geekdo-images.com/s9oGMCo1fcfV4Dk3EnqLZw__opengraph/img/-lK5MWEusIFTLH7BaYPRG_DvsME=/fit-in/1200x630/filters:strip_icc()/pic3146943.png',stock:10,description:'Euro Game', category:'strategygames'}
]


export const getProducts =(category) =>{
    return new Promise((resolve,reject)=>{
        
        if(category!=null)
        {
            const prod=products.filter(p => p.category ===category)
            setTimeout(()=>{
                resolve(prod)  
            },2000)
        }
        else{
            setTimeout(()=>{
                resolve(products)
            },2000)
        }


    
    })
}

export const getProduct =(id) =>{

    return new Promise((resolve,reject)=>{
        const prod=products.find(p => p.id ===parseInt(id))
        setTimeout(()=>{
            resolve(prod)
        },2000)
    })        
}