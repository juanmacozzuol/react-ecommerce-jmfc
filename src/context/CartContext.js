import { createContext, useState,useEffect} from "react"


const Context =createContext();
export const CartContextProvider =({children})=>{

    const [cart,setCart]=useState([]);

    useEffect(()=>{
        console.log(cart)
    },[cart])  

    const addProducts=(productToAdd,valor) =>{

        const obj ={...productToAdd,valor}




        if(inCart(obj.id)){

          const duplicate =cart.map(p=>{
            if(p.id===obj.id)  {
            p.valor+=obj.valor
            }
        
          
            return p;

            })
            setCart(duplicate)
           
        }
         
        else
        {   

            setCart([...cart,obj])
            


        }
        
    }

    const removeItem=(id)=>{

        const newCart = cart.filter (p =>p.id!==id)

        setCart(newCart);



    }

    const clearCart =()=>{

        setCart([]);

    }
    
const inCart =(id)=>{


    return cart.some(p=>p.id===id)


}
    return(

        <Context.Provider value={{addProducts,removeItem, clearCart}}>

            {children}

        </Context.Provider>
    )


}

export default Context;