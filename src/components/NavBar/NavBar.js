import './NavBar.css';
import {GiMeepleKing} from 'react-icons/gi';
import CartWidget from '../CartWidget/CartWidget';
import {NavLink, Link} from 'react-router-dom'

const NavBar =() =>{





    return(
      <nav >
        <div className="nav" >
            <div >
            <Link to='/'><GiMeepleKing className="logo" /></Link>
            <CartWidget/>
       
            </div>
            <h1>The Meeple King</h1>

            <ul>
            <li> <NavLink to={'/category/twoplayergames'}   className={({isActive})=> isActive ? 'selectedlink' : 'link'}   >Two Player Games</NavLink></li>
            <li><NavLink to={'/category/strategygames'} className={({isActive})=> isActive ? 'selectedlink' : 'link'} >Strategy Games</NavLink></li>
            <li><NavLink to={'/category/gatewaygames'} className={({isActive})=> isActive ? 'selectedlink' : 'link'} >Gateway Games</NavLink></li>
            </ul>

        </div>        

        
        
      </nav>
    )
    }

    export default NavBar;