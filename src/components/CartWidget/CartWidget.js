import {FiShoppingCart} from 'react-icons/fi';
import './CartWidget.css';
import Context from '../../context/CartContext';
import { useContext } from 'react';


const CartWidget =()=>
{
    const {getQuantity} = useContext(Context);

    return(

    <div className="cartwidget">

      {getQuantity()!==0 && <button className='cart'><FiShoppingCart/>{getQuantity()}</button>}
    </div>

    )

}


export default CartWidget


