import Item from '../Item/Item'

const ItemList =({productos})=>{
    return(
      <div className='item-grid'>
        {productos.map( product => {
          return <Item key={product.id} id={product.id} name={product.name} img={product.img}  /> })
        }
      </div>
    )
}

export default ItemList;

