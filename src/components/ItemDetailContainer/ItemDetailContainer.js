import { useEffect,useState } from "react";
import ItemDetail from '../ItemDetail/ItemDetail'
import { getProduct } from '../Mock/Mock'
import{ useParams} from 'react-router-dom'

const ItemDetailContainer = () =>{

    const[product,setProduct]=useState()
    const params=useParams();

    useEffect(()=>{
        getProduct(params.productId).then((product)=>{
            setProduct(product)
        } )
    },[params.productId])   


    return(

        <ItemDetail {...product}/>
    )      
}

export default ItemDetailContainer;