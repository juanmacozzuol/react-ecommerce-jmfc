

const Item = ({name, img, price, description,stock})=>{


    return(
        
        <li style={{display:"inline-block"}} ><img style={{height:200,width:170}} src={img}></img><p>{name}</p><p>price:${price}</p><p>stock:{stock}</p><p>{description}</p> </li>

    
    )





}

export default Item;