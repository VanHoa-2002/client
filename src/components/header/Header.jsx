import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { GlobalState } from '../../GlobalState'
import Menu from './icon/bars-solid.svg'
import Cart from './icon/shopping-cart-solid.svg'
import Close from './icon/window-close-regular.svg'
const Header = () => {
    const value = useContext(GlobalState)
  return (
    <header>
        <div className="menu">
          <img src={Menu} alt="" width={30} />
        </div>

        <div className="logo">
          <h1>
            <Link to="/">shoping</Link>
          </h1>
        </div>
        <ul>
          <li>
            <Link to="">Products</Link>
          </li>
          <li>
          <Link to="login">login + register</Link>
          </li>
          <li>
            <img src={Close} className="menu" width="30" alt="" />
          </li>
        </ul>
        <div className="cart-icon">
          <span>0</span>
          <Link to="/cart"><img src={Cart} width="30" alt="" /></Link>
        </div>
    </header>
  )
}

export default Header