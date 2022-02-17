import {useState} from "react"

const ItemCount = ({stock, initial, onAdd}) =>{

    const [count, setCount]=useState(0);

    const decrement =()=>{
        if (count>initial)
        {
            setCount(count-1);
        }
    }

    const increment =()=>{
        if(count<stock){
            setCount(count+1);
        }
    }

    return(
        <div >
            <button  onClick={decrement}>-</button>
            <p style={{display:"inline"}}>{count}</p>
            <button  onClick={increment}>+</button>
            <div>
                <button onClick={()=>onAdd(count)}>Agregar al carrito</button>
            </div>
        </div>
    )
    




}

export default ItemCount;