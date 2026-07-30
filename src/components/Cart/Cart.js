
import { useContext,useState } from "react"
import Context from '../../context/CartContext';
import { Card, CardBody, CardTitle, CardImg, CardSubtitle, CardHeader} from 'reactstrap';
import {Link} from 'react-router-dom'
import {writeBatch,getDoc,doc,collection,addDoc,Timestamp} from 'firebase/firestore'
import { firestoreDb } from '../../services/firebase/firebase'
import Form from '../Form/Form'


const Cart =()=>{
const [contact,setContact] = useState({
    name: '',
    phone: '',
    address: '',
    comment: ''

})
const {cart, getPrice,removeItem,clearCart} = useContext(Context)
const [orden,setOrden]=useState('')
const [submitting,setSubmitting]=useState(false)
const [error,setError]=useState(null)

const confirmOrder = async () =>{
    setSubmitting(true)
    setError(null)

    try {
        const stockChecks = await Promise.all(
            cart.map(async (item) => {
                const snapshot = await getDoc(doc(firestoreDb,'products',item.id))
                return { item, currentStock: snapshot.data().stock }
            })
        )

        const outOfStock = stockChecks.filter(({ item, currentStock }) => currentStock < item.valor)

        if (outOfStock.length > 0) {
            setError(`Not enough stock for: ${outOfStock.map(({ item }) => item.name).join(', ')}`)
            return
        }

        const batch = writeBatch(firestoreDb)
        stockChecks.forEach(({ item, currentStock }) => {
            batch.update(doc(firestoreDb,'products',item.id), { stock: currentStock - item.valor })
        })

        const objOrder = {
            buyer: contact,
            items: cart,
            total: getPrice(),
            date: Timestamp.fromDate(new Date())
        }

        const { id } = await addDoc(collection(firestoreDb,'orders'), objOrder)
        await batch.commit()

        clearCart()
        setOrden(id)
        setContact({
            name: '',
            phone: '',
            address: '',
            comment: ''
        })
    } catch (err) {
        setError('Something went wrong placing your order. Please try again.')
    } finally {
        setSubmitting(false)
    }
}




    return(
        cart.length===0 && orden!==''
        ?<div style={{maxWidth:700, margin:'0 auto', padding:'2rem 1.5rem', textAlign:'center'}}><p>Your cart is empty</p><Link to='/'>Go Home</Link><p>{`Your order number is ${orden}`}</p></div>
        : cart.length===0
        ? <div style={{maxWidth:700, margin:'0 auto', padding:'2rem 1.5rem', textAlign:'center'}}><p>Your cart is empty</p><Link to='/'>Go Home</Link></div>
        :<div style={{maxWidth:700, margin:'0 auto', padding:'2rem 1.5rem'}}>

                <h2 style={{marginBottom:'1.25rem'}}>Your Cart</h2>

                <div className='item-grid' style={{gridTemplateColumns:'repeat(auto-fill, minmax(180px, 1fr))', marginBottom:'1.5rem'}}>
                {cart.map( product => {

                    return(

                        <Card key={product.id} className='product-card text-start'>
                            <CardHeader className='product-card-header text-center'>
                                <CardTitle tag="h5">{product.name}</CardTitle>
                            </CardHeader>

                            <div style={{height:180, overflow:'hidden', display:'flex', alignItems:'center', justifyContent:'center'}}>
                                <CardImg  style={{height:180,width:'auto',maxWidth:'100%'}} src={product.img} />
                            </div>

                            <CardBody>
                                <CardSubtitle className='mb-2 text-muted'>${product.price}</CardSubtitle>

                                <p className='lead'>Quantity: {product.valor}</p>



                            </CardBody>
                            <button className='btn-outline' style={{margin:'0.75rem'}} onClick={()=>removeItem(product.id)}>Remove</button>
                        </Card>

                    )
                }

                )}
                </div>

                <div style={{display:'flex', flexDirection:'column', alignItems:'flex-start', gap:'0.75rem', marginBottom:'0.5rem'}}>
                    <p style={{fontSize:'1.1rem', fontWeight:600, margin:0}}>Total: ${getPrice()}</p>
                    <button className='btn-outline' onClick={()=>clearCart()}>Clear Cart</button>
                </div>

                {error && <p className="error">{error}</p>}
                {contact.name!==''&&contact.address!==''&&contact.phone!==''&&contact.comment!==''
                    ?<button className='btn-brand' style={{width:'100%', marginTop:'1rem'}} disabled={submitting} onClick={()=>confirmOrder()}>{submitting ? 'Placing order...' : 'Place Order'}</button>
                        :<Form setContact={setContact}/>
                }


        </div>


    )

}

export default Cart
