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

    }).catch(()=>{
      setCategories([])
    })

  }, [])

  return(
      <nav className="navbar">
          <Link to='/' className="brand">
            <GiMeepleKing className="logo" />
            <span className="brand-title">The Meeple King</span>
          </Link>

          <div className="nav-links">
            {categories.map(cat => <NavLink key={cat.id} to={`/category/${cat.id}`} className={({ isActive }) =>
              isActive ? 'selectedLink' : 'link'
            }>{cat.description}</NavLink>)}
          </div>

          <CartWidget/>
      </nav>
  )
}
export default NavBar;
