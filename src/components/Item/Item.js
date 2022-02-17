
import {Link} from 'react-router-dom'
const Item = ({name, img,id})=>{


    return(
     <div style={{display:"inline-block"}}>
                        <li   ><Link to={`/detail/${id}`}> <img alt={name} style={{height:200,width:170}} src={img}></img></Link><p>{name}</p> </li>
                  
                        </div>
    )





}

export default Item;