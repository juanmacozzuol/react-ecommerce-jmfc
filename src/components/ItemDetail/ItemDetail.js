
import { Col, Card, CardBody, CardTitle, CardText, CardImg, CardSubtitle, Button, CardHeader } from 'reactstrap';
import ItemCount from '../ItemCount/ItemCount';
const ItemDetail = (producto) =>{

    const addItems =(valor)=>{
        console.log(valor +"items agregados");
     }

return(

<div>
    

    {/* <img alt={producto.name} style={{height:200,width:170}} src={producto.img}></img>
    <p>{producto.name}</p>
    <p>price:{producto.price}</p>
    <p>stock:{producto.stock}</p>
    <p>description:{producto.description}</p> */}
    <Col className='col-md-4 mb-4' >
            <Card className='border-warning text-start'>
                <CardHeader className='bg-warning text-center'>
                    <CardTitle tag="h5">{producto.name}</CardTitle>
                </CardHeader>
                <div style={{height:200, overflow:'hidden', alignItems:'center'}}>
                    <img  style={{height:200,width:170}} className='img-fluid' src={producto.img} />
                </div>
                <CardBody>
                    <CardSubtitle className='mb-2 text-muted'>${producto.price}</CardSubtitle>

                    <p className='lead'>{producto.description}</p>

                    <ItemCount onAdd={addItems} stock={producto.stock} initial={0}/>
                </CardBody>
            </Card>
        </Col>



</div>
)


}


export default ItemDetail;