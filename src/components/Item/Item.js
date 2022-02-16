

const Item = ({name, img})=>{


    return(
        
        <li  style={{display:"inline-block"}} ><img alt={name} style={{height:200,width:170}} src={img}></img><p>{name}</p> </li>

    
    )





}

export default Item;