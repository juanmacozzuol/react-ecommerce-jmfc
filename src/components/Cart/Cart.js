
import { useContext } from "react"
import Context from '../../context/CartContext';
import { Col, Card, CardBody, CardTitle, CardImg, CardSubtitle, CardHeader, Row} from 'reactstrap';
import {Link} from 'react-router-dom'



const Cart =()=>{

const {cart, getPrice,removeItem,clearCart} = useContext(Context)

    return(   
        cart.length===0?<div><p>Carrito Vacío</p><Link to='/'>Go Home</Link></div>:
        <div>
           
                {cart.map( product => {
                   
                    return(    

                        <Row  key={product.id} className='col-md-4 mb-4' >
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
                        </Row>
                    
                    )
                }
                )}


                <button onClick={()=>clearCart()}>Limpiar Carrito</button>
                <p>Total:${getPrice()}</p>
                
        </div>

    
    )

}

export default Cart