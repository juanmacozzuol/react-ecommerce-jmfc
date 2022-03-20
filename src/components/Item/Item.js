
import {Link} from 'react-router-dom'
import { Col, Card, CardTitle, CardHeader } from 'reactstrap';
const Item = ({name, img,id})=>{

    return(
        <div style={{display:"inline-block"}}>

            <Col className='col-md-4 mb-4' style={{margin:10}} >
                <Card className='border-warning text-start'>
                    <CardHeader className='bg-warning text-center'>
                        <CardTitle tag="h5">{name}</CardTitle>
                    </CardHeader>

                    <div style={{height:200, overflow:'hidden', alignItems:'center'}}>
                        <Link to={`/detail/${id}`}> <img alt={name} style={{height:200,width:170}} src={img}></img></Link>
                    </div>
               
                </Card>
            </Col>
    
        </div>
    )
}

export default Item;