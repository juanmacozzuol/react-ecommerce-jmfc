import { useEffect,useState} from "react";
import ItemDetail from '../ItemDetail/ItemDetail'
import{ useParams} from 'react-router-dom'
import { Spinner } from "reactstrap";
import {getDoc, doc} from 'firebase/firestore'
import { firestoreDb } from "../../services/firebase/firebase";

const ItemDetailContainer = () =>{

    const[product,setProduct]=useState()
    const[error,setError]=useState(null)
    const params=useParams();
    const [loading,setLoading]=useState(true)

    useEffect(()=>{
        setLoading(true)
        setError(null)

        const docRef=doc(firestoreDb,'products',params.productId)

        getDoc(docRef).then(response =>{

            const product ={id:response.id,...response.data()}
            setProduct(product)

        }).catch(()=>{
            setError('Could not load this product. Please try again later.')
        }).finally(()=>{
            setLoading(false)
        })
    },[params.productId])

    return(

        <div>
        {loading && <Spinner/>}
        {error && <p className="error">{error}</p>}
        {!loading && !error && <ItemDetail {...product}/>}
        </div>

        )
}

export default ItemDetailContainer;
