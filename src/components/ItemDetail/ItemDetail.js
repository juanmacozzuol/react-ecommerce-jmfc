
import { Col, Card, CardBody, CardTitle, CardText, CardImg, CardSubtitle, Button, CardHeader } from 'reactstrap';
import ItemCount from '../ItemCount/ItemCount';
const ItemDetail = (producto) =>{

    const addItems =(valor)=>{
        console.log(valor +"items agregados");
     }

return(

    <div>
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

                    <ItemCount onAdd={addItems} stock={producto.stock} initial={1}/>
                </CardBody>
        </Card>
        </Col>
    </div>
)


}


export default ItemDetail;