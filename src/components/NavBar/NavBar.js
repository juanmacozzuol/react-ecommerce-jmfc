import './NavBar.css'

const NavBar =() =>{
    return(
      <nav >
        <div class="nav" >
            <div >
            <img class="logo" src={'./images/logo192.png'}></img>
            </div>
            <h1>The Boardgame Store</h1>
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