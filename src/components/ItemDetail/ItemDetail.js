


const ItemDetail = (producto) =>{


console.log(producto)
return(

<div>
    

    <img alt={producto.name} style={{height:200,width:170}} src={producto.img}></img>
    <p>{producto.name}</p>
    <p>price:{producto.price}</p>
    <p>stock:{producto.stock}</p>
    <p>description:{producto.description}</p>


</div>
)


}


export default ItemDetail;