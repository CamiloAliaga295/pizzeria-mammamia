import { NavLink } from "react-router-dom";
import Logo from '../assets/logo.png'
import { useContext } from "react";
import { MyContext } from "../context/MyContext";
const NavBar = () => {

  const activeClass = ({ isActive }) => (isActive ? "active" : "")
  const { countProducts} = useContext(MyContext);
  const { allProducts } = useContext(MyContext);

  return (
    <div className="navbar-container">
      <navbar>
        <div className="navbar-l">
          <NavLink to="/">
            <img src={Logo} alt="logo" className='logo' />
          </NavLink>
        </div>

    <div className='navbar-c'>
      <NavLink className={activeClass} to="/">
        <i className="fa-solid fa-bell-concierge"></i>MENÚ
      </NavLink>
      <a>
        <i className="fa-solid fa-pizza-slice"></i>PROMOS
      </a>
      <a>
        <i className="fa-solid fa-shop"></i>LOCALES
      </a>
      <a>
        <i className="fa-solid fa-note-sticky"></i>MIS PEDIDOS
      </a>
      <a>
        <i className="fa-solid fa-user"></i>INGRESAR
      </a>
    </div>
    <NavLink className={activeClass} to="/cart">
      <div className="navbar-r">
        <i className="fa-solid fa-cart-shopping"></i>
        <p className={`cart-num ${allProducts.length == 0 ? 'hidden' : ''}`}>{countProducts}</p>
      </div>
    </NavLink>
  </navbar>
  </div>   
  )
}

export default NavBar