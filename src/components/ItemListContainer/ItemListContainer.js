import "./ItemListContainer.css";
import ItemCount from "../ItemCount/ItemCount";



   

const ItemListContainer =({title})=>{

    const addItems =()=>{
       console.log("items agregados");
    }

return(

<div>
<h2 class="itemlist">{title}</h2>
<ItemCount stock="10" initial="0" onAdd={addItems} />

</div>
)


}

export default ItemListContainer;