import { useEffect,useState } from "react";
import ItemDetail from '../ItemDetail/ItemDetail'
import { getProduct } from '../Mock/Mock'

const ItemDetailContainer = () =>{

    const[product,setProduct]=useState()


useEffect(()=>{
getProduct().then((product)=>{

    setProduct(product)
   

})


},[])


return(

    <ItemDetail producto={product}/>
)
    
}

export default ItemDetailContainer;