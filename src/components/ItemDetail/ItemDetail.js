
import { Col, Card, CardBody, CardTitle, CardText, CardImg, CardSubtitle, Button, CardHeader } from 'reactstrap';
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

       if(valor!=0){

         addProducts(productToAdd,valor);
        
        }

        
     }

return(

    <div>
        <Col className='col-md-4 mb-4' >
            <Card className='border-warning text-start'>
                <CardHeader className='bg-warning text-center'>
                    <CardTitle tag="h5">{name}</CardTitle>
                </CardHeader>
                <div style={{height:200, overflow:'hidden', alignItems:'center'}}>
                    <img  style={{height:200,width:170}} className='img-fluid' src={img} />
                </div>
                <CardBody>
                    <CardSubtitle className='mb-2 text-muted'>${price}</CardSubtitle>

                    <p className='lead'>{description}</p>

                    {bought===0 ?<ItemCount onAdd={addItems} stock={stock} initial={0}/> :<Link to='/cart'>Ver Carrito</Link>}

                </CardBody>
        </Card>
        </Col>
    </div>
)


}


export default ItemDetail;