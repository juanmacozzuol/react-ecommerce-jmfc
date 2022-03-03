import { useEffect,useState} from "react";
import ItemDetail from '../ItemDetail/ItemDetail'
import{ useParams} from 'react-router-dom'
import { Spinner } from "reactstrap";
import {getDoc, doc} from 'firebase/firestore'
import { firestoreDb } from "../../services/firebase/firebase";
const ItemDetailContainer = () =>{

    const[product,setProduct]=useState()
    const params=useParams();
    const [loading,setLoading]=useState(true)
   
    useEffect(()=>{

        const docRef=doc(firestoreDb,'products',params.productId)

        getDoc(docRef).then(response =>{

            const product ={id:response.id,...response.data()}
            setProduct(product)

        }).finally(
            setLoading(false)

        )


    },[params.productId])   


    return(
        
        <div>
        {loading ? <Spinner/>: <ItemDetail {...product}/>}
        </div>
        
        ) 
}

export default ItemDetailContainer;