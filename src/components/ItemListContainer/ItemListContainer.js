import { useEffect,useState } from "react";
import "./ItemListContainer.css";
import ItemCount from "../ItemCount/ItemCount";
import ItemList from "../ItemList/ItemList"
import { getProducts } from "../Mock/Mock";






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
<h2 className="itemlist">{title}</h2>
<ItemCount stock="10" initial="0" onAdd={addItems} />
<ItemList productos={products}/>


</div>
)


}

export default ItemListContainer;