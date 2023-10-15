import {Redirect} from 'react-router-dom'
import Cookies from 'js-cookie'

import Header from '../Header'
import './index.css'

const Product = () => {
  if (Cookies.get('JWT_token') === undefined) {
    return <Redirect to="/login" />
  }
  return (
    <div>
      <Header />
      <div className="productcontainers">
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-products-img.png"
          alt="products"
          className="productimgpx"
        />
      </div>
    </div>
  )
}

export default Product
