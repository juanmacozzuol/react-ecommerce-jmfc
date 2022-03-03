import { useEffect,useState } from "react";
import "./ItemListContainer.css";
import ItemList from "../ItemList/ItemList"
import{ useParams} from 'react-router-dom'
import {getDocs,collection, query,where} from 'firebase/firestore'
import { firestoreDb } from "../../services/firebase/firebase";

const ItemListContainer =({title})=>{

    const[products,setProducts]=useState([])
    const params=useParams();
 
 

    useEffect(()=>{
        const collectionRef= params.categoryId ? 
        query(collection(firestoreDb,'products'),where('category','==',params.categoryId)):
        collection(firestoreDb,'products')
  
        getDocs(collectionRef).then(querySnapshot =>{
            const products=querySnapshot.docs.map(doc=>{

               
                return{id:doc.id,...doc.data()}
            })

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