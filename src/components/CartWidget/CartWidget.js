import {FiShoppingCart} from 'react-icons/fi';
import './CartWidget.css';
import Context from '../../context/CartContext';
import { useContext } from 'react';
import {Link} from 'react-router-dom'

const CartWidget =()=>
{
    const {getQuantity} = useContext(Context);

    return(

    <div className="cartwidget">
      
    <Link to='/cart'>     

      {getQuantity()!==0 &&  <button  className='cart'><FiShoppingCart/>{getQuantity()}</button>}
    
      </Link> 
    </div>



    )

}


export default CartWidget


