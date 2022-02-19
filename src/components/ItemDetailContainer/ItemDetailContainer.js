import { useEffect,useState} from "react";
import ItemDetail from '../ItemDetail/ItemDetail'
import { getProduct } from '../Mock/Mock'
import{ useParams} from 'react-router-dom'
import { Spinner } from "reactstrap";

const ItemDetailContainer = () =>{

    const[product,setProduct]=useState()
    const params=useParams();
    const [loading,setLoading]=useState(true)
    useEffect(()=>{
        getProduct(params.productId).then((product)=>{
            setProduct(product)
        } ).catch(err =>{
            console.log(err);


        }).finally(()=>{
            setLoading(false);

        })
    },[params.productId])   


    return(
        
        <div>
        {loading ? <Spinner/>: <ItemDetail producto={product}/>}
        </div>
        
        ) 
}

export default ItemDetailContainer;