import './NavBar.css';
import {GiMeepleKing} from 'react-icons/gi';
import CartWidget from '../CartWidget/CartWidget';
import {NavLink, Link} from 'react-router-dom'
import { useEffect,useState } from 'react'
import { getCategories } from '../Mock/Mock';

const NavBar =() =>{


  const [categories, setCategories] = useState([])
  useEffect(() => {
    getCategories().then(categories => {
      setCategories(categories)
    })
  }, [])



  return(
      <nav >
          <div className="nav" >
              <div >
                <Link to='/'><GiMeepleKing className="logo" /></Link>
                <CartWidget/>
          
              </div>
              <h1>The Meeple King</h1>

              <div>
                {categories.map(cat => <NavLink key={cat.id} to={`/category/${cat.id}`} className={({ isActive }) =>
                  isActive ? 'selectedLink' : 'link'
                }>{cat.description}</NavLink>)}
              </div>
          </div>       
      </nav>
  )
}

export default NavBar;