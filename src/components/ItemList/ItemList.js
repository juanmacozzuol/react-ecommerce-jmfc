import Item from '../Item/Item'

const ItemList =({productos})=>{

 

    return(

        <ul>
    
        {productos.map( product => {
                
            return <Item name={product.name} img={product.img} price={product.price} stock={product.stock} description={product.description} /> })
    
            }
    
                    
        </ul>
        
        )
         
 
}




export default ItemList;

