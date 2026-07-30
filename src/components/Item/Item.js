
import {Link} from 'react-router-dom'
import { Card, CardTitle, CardHeader } from 'reactstrap';
const Item = ({name, img,id})=>{

    return(
        <Card className='product-card text-start'>
            <CardHeader className='product-card-header text-center'>
                <CardTitle tag="h5">{name}</CardTitle>
            </CardHeader>

            <div style={{height:200, overflow:'hidden', display:'flex', alignItems:'center', justifyContent:'center'}}>
                <Link to={`/detail/${id}`}><img alt={name} style={{height:200,width:'auto',maxWidth:'100%'}} src={img}></img></Link>
            </div>

        </Card>
    )
}

export default Item;
