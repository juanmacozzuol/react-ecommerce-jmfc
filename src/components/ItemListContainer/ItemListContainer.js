import { useEffect,useState } from "react";
import "./ItemListContainer.css";
import ItemList from "../ItemList/ItemList"
import{ useParams} from 'react-router-dom'
import {getDocs,getDoc,doc,collection, query,where} from 'firebase/firestore'
import { firestoreDb } from "../../services/firebase/firebase";

const ItemListContainer =({title})=>{

    const[products,setProducts]=useState([])
    const[loading,setLoading]=useState(true)
    const[error,setError]=useState(null)
    const[categoryTitle,setCategoryTitle]=useState(null)
    const params=useParams();

    useEffect(()=>{
        setLoading(true)
        setError(null)
        setCategoryTitle(null)

        const collectionRef= params.categoryId ?
        query(collection(firestoreDb,'products'),where('category','==',params.categoryId)):
        collection(firestoreDb,'products')

        getDocs(collectionRef).then(querySnapshot =>{
            const products=querySnapshot.docs.map(doc=>{
                return{id:doc.id,...doc.data()}
            })

            setProducts(products)

        }).catch(()=>{
            setError('Could not load products. Please try again later.')
        }).finally(()=>{
            setLoading(false)
        })

        if(params.categoryId){
            getDoc(doc(firestoreDb,'categories',params.categoryId)).then(response=>{
                setCategoryTitle(response.data()?.description ?? null)
            }).catch(()=>{
                setCategoryTitle(null)
            })
        }

    },[params.categoryId])

    const displayTitle = params.categoryId ? categoryTitle : title

    return(

        <div style={{paddingTop:'1.5rem'}}>
            {displayTitle && <h2 style={{padding:'0 1.5rem 1rem'}}>{displayTitle}</h2>}

            {loading && <p style={{padding:'0 1.5rem'}}>Loading products...</p>}
            {error && <p className="error" style={{padding:'0 1.5rem'}}>{error}</p>}
            {!loading && !error && <ItemList productos={products} />}
        </div>
    )
}

export default ItemListContainer;
