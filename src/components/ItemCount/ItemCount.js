import {useState} from "react"

const ItemCount = ({stock, initial, onAdd}) =>{

    const [count, setCount]=useState(initial);

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
        <div>
            <div style={{display:"flex", alignItems:"center", justifyContent:"center", gap:"0.75rem", marginBottom:"0.75rem"}}>
                <button className='btn-outline' onClick={decrement}>-</button>
                <p style={{display:"inline", margin:0}}>{count}</p>
                <button className='btn-outline' onClick={increment}>+</button>
            </div>
            <div>
                <button className='btn-brand' onClick={()=>onAdd(count)}>Add to cart</button>
            </div>
        </div>
    )

}

export default ItemCount;