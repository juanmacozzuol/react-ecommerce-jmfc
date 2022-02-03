import './NavBar.css';
import {GiMeepleKing} from 'react-icons/gi';
import Button from '../Button/Button';
import CartWidget from '../CartWidget/CartWidget';

const NavBar =() =>{

    return(
      <nav >
        <div class="nav" >
            <div >
            <GiMeepleKing class="logo" />
            <CartWidget/>
       
            </div>
            <h1>The Meeple King</h1>

            <ul>
            <li> <Button  label="Two Player Games" backgroundColor='#800020' colorText='white' >Two Player Games</Button></li>
            <li><Button label="Strategy Games" backgroundColor='#800020' colorText='white'>Strategy Games</Button></li>
            <li><Button label="Gateway Games" backgroundColor='#800020' colorText='white'>Gateway Games</Button></li>
            </ul>

        </div>        

        
        
      </nav>
    )
    }

    export default NavBar;