import { createContext, useState,useEffect} from "react"


const Context =createContext();
export const CartContextProvider =({children})=>{

    const [cart,setCart]=useState([]);

    useEffect(()=>{
     
    },[cart])  

    const addProducts=(productToAdd,valor) =>{

        const obj ={...productToAdd,valor}




        if(inCart(obj.id)){

          cart.map(p=>{
            if(p.id===obj.id)  {
            p.valor+=obj.valor
            }

            return(p)
            })
           
           
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

    const getQuantity=() =>{
        let totalQ = 0
        cart.forEach(item =>{
    
         totalQ = totalQ + item.valor
     
       
        })
        
        return(totalQ)  
    }
    
    const getPrice=() =>{
        let total = 0
        cart.forEach(item =>{
    
         total = total + (item.price*item.valor)
     
       
        })
        
        return(total)
    }



    return(

        <Context.Provider value={{addProducts,removeItem, clearCart,getQuantity, cart,getPrice}}>

            {children}

        </Context.Provider>
    )


}

export default Context;