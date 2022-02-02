import './NavBar.css'
import {GiMeepleKing} from 'react-icons/gi'

const NavBar =() =>{
    return(
      <nav >
        <div class="nav" >
            <div >
            <GiMeepleKing class="logo" />
            </div>
            <h1>The Meeple King</h1>
            <ul>
            <li> <a class="link" href="#twoplayergames">Two Player Games</a></li>
            <li><a class="link" href="#strategygames">Strategy Games</a></li>
            <li><a class="link" href="#gatewaygames">Gateway Games</a></li>
            </ul>
        </div>        
        
      </nav>
    )
    }

    export default NavBar;