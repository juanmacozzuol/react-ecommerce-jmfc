import { useEffect,useState } from "react";
import "./ItemListContainer.css";
import ItemCount from "../ItemCount/ItemCount";
import ItemList from "../ItemList/ItemList"
import { getProducts } from "../Mock/Mock";
import{ useParams} from 'react-router-dom'


const ItemListContainer =({title})=>{

    const[products,setProducts]=useState([])
    const params=useParams();
 
 

    useEffect(()=>{
        getProducts(params.categoryId).then((products)=>{

            setProducts(products)

        })
    },[params.categoryId])

    return( 

        <div>
            <h2 >{title}</h2>
            
            <ItemList productos={products} />
        </div>
    )
}

export default ItemListContainer;