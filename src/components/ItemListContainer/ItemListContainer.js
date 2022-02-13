import { useEffect,useState } from "react";
import "./ItemListContainer.css";
import ItemCount from "../ItemCount/ItemCount";
import ItemList from "../ItemList/ItemList"


const products =[
    {id:1, name:'Carcassonne',price:14500,img:'https://m.media-amazon.com/images/I/812D90aXxUS._AC_SL1500_.jpg',stock:50,description:'Tile-laying game'},
    {id:2, name:'Pandemic',price:12500,img:'https://target.scene7.com/is/image/Target/GUEST_0313f621-d762-4e1d-9855-e32163314488?wid=488&hei=488&fmt=pjpeg',stock:20,description:'Cooperative Game'},
    {id:3, name:'A Feast For Odin',price:22500,img:'https://cf.geekdo-images.com/s9oGMCo1fcfV4Dk3EnqLZw__opengraph/img/-lK5MWEusIFTLH7BaYPRG_DvsME=/fit-in/1200x630/filters:strip_icc()/pic3146943.png',stock:10,description:'Euro Game'}
]


const getProducts =() =>{
return new Promise((resolve,reject)=>{

    setTimeout(()=>{
        resolve(products)

    },2000)

    })

}

const ItemListContainer =({title})=>{

    const[products,setProducts]=useState([])
    const addItems =(valor)=>{
       console.log(valor +"items agregados");
    }

useEffect(()=>{
getProducts().then((products)=>{

    setProducts(products)

})


},[])


return( 

<div>
<h2 class="itemlist">{title}</h2>
<ItemCount stock="10" initial="0" onAdd={addItems} />
<ItemList productos={products}/>


</div>
)


}

export default ItemListContainer;