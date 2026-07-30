
import { Card, CardBody, CardTitle, CardSubtitle,  CardHeader } from 'reactstrap';
import ItemCount from '../ItemCount/ItemCount';
import { useState,useContext } from 'react';
import { Link } from 'react-router-dom';
import Context from '../../context/CartContext';

const ItemDetail = ({name,img,stock,description,price, id}) =>{
const [bought,setBought] = useState(0);
 const {addProducts} = useContext(Context);

    const addItems =(valor)=>{

        setBought(valor);

        const productToAdd = {
          id,
          name,
          price,
          img,
          description,
          stock
        }

       if(valor!==0){
         addProducts(productToAdd,valor);
        }
     }

return(

    <div style={{maxWidth:320, margin:'0 auto', padding:'0 1.5rem 2rem'}}>
        <Card className='product-card text-start'>
            <CardHeader className='product-card-header text-center'>
                <CardTitle tag="h5">{name}</CardTitle>
            </CardHeader>
            <div style={{height:220, overflow:'hidden', display:'flex', alignItems:'center', justifyContent:'center'}}>
                <img  style={{height:220,width:'auto',maxWidth:'100%'}} src={img} alt={name} />
            </div>
            <CardBody>
                <CardSubtitle className='mb-2 text-muted'>${price}</CardSubtitle>

                <p className='lead'>{description}</p>

                {bought===0 && stock!==0?<ItemCount onAdd={addItems} stock={stock} initial={1}/> :stock===0 ? <p>Out of stock</p> : <Link to='/cart'>View Cart</Link>}

            </CardBody>
        </Card>
    </div>
)

}

export default ItemDetail;
