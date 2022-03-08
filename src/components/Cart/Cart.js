
import { useContext,useState } from "react"
import Context from '../../context/CartContext';
import { Col, Card, CardBody, CardTitle, CardImg, CardSubtitle, CardHeader} from 'reactstrap';
import {Link} from 'react-router-dom'
import {writeBatch,getDoc,doc,collection,addDoc,Timestamp} from 'firebase/firestore'
import { firestoreDb } from '../../services/firebase/firebase'








const Cart =()=>{

const {cart, getPrice,removeItem,clearCart} = useContext(Context)
const [orden,setOrden]=useState('')


const confirmOrder = () =>{
   
    const objOrder={
        buyer:{
            name:'Juan',
            phone:'85415415',
            address:'una calle'
    
        },
    
        items:cart,
        total:getPrice(),
        date:Timestamp.fromDate(new Date())
    }

 const batch = writeBatch(firestoreDb)
 const outOfStock = []
 objOrder.items.forEach(prod=>{

    getDoc(doc(firestoreDb,'products',prod.id)).then(response=>{

            if(response.data().stock >= prod.valor)
            {
                batch.update(doc(firestoreDb,'products',response.id),
                {stock:response.data().stock-prod.valor})
            }else {
                outOfStock.push({id:response.id,...response.data()})

            }

    })

 })

 if(outOfStock.length===0){

    addDoc(collection(firestoreDb,'orders'),objOrder).then(({id})=>{

        batch.commit().then(()=>{
            console.log(id)
            clearCart()
           setOrden(id)
        })
    })
 }
 
}




    return(   
        cart.length===0?<div><p>Carrito Vacío</p><Link to='/'>Go Home</Link><p> {`Su numero de orden es ${orden}`}</p></div>:
        <div>
           
                {cart.map( product => {
                   
                    return(    

                        <Col  key={product.id} className='col-md-4 mb-4' >
                            <Card className='border-warning text-start'>
                                <CardHeader className='bg-warning text-center'>
                                    <CardTitle tag="h5">{product.name}</CardTitle>
                                </CardHeader>
                                
                                <div style={{height:200, overflow:'hidden', alignItems:'center'}}>
                                    <CardImg  style={{height:200,width:170}} className='img-fluid' src={product.img} />
                                </div>
                                
                                <CardBody>
                                    <CardSubtitle className='mb-2 text-muted'>${product.price}</CardSubtitle>

                                    <p className='lead'>Cantidad:{product.valor}</p>



                                </CardBody>
                                <button  onClick={()=>removeItem(product.id)}>Remover</button>
                        </Card>
                        </Col>
                    
                    )
                }
                )}


                <button onClick={()=>clearCart()}>Limpiar Carrito</button>
                <button onClick={()=>confirmOrder()}>Cargar Orden</button>
                <p>Total:${getPrice()}</p>
                
        </div>

    
    )

}

export default Cart