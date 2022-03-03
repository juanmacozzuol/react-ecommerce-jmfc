import './NavBar.css';
import {GiMeepleKing} from 'react-icons/gi';
import CartWidget from '../CartWidget/CartWidget';
import {NavLink, Link} from 'react-router-dom'
import { useEffect,useState } from 'react'
import{getDocs,collection} from 'firebase/firestore'
import { firestoreDb } from '../../services/firebase/firebase';

const NavBar =() =>{

  const [categories, setCategories] = useState([])
  useEffect(() => {

    getDocs(collection(firestoreDb,'categories')).then(response =>{

      const categories =response.docs.map(cat =>{

        return {id:cat.id,...cat.data()}

      })
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