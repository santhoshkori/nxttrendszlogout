import {Redirect} from 'react-router-dom'
import Cookies from 'js-cookie'

import Header from '../Header'
import './index.css'

const Cart = () => {
  if (Cookies.get('JWT_token') === undefined) {
    return <Redirect to="/login" />
  }

  return (
    <div>
      <Header />

      <div className="Cartcontainer">
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-cart-img.png"
          alt="cart"
          className="cartimgpx"
        />
      </div>
    </div>
  )
}

export default Cart
