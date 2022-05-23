import {Link} from 'react-router-dom'
import './index.css'

const Header = () => (
  <nav className="navbar">
    <div className="home-logo-logout-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
        alt="website-logo"
        className="home-website-logo"
      />
      <button type="button" className="logout-btn-mobile">
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-log-out-img.png"
          alt="nav logout"
          className="logout-img"
        />
      </button>
    </div>
    <ul className="navbar-list-container-mobile">
      <li>
        <Link to="/">
          <button type="button" className="nav-home-btn">
            <img
              src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-icon.png"
              alt="nav home"
              className="nav-home-img"
            />
          </button>
        </Link>
      </li>
      <li>
        <Link to="/products">
          <button type="button" className="nav-home-btn">
            <img
              src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-products-icon.png"
              alt="nav home"
              className="nav-home-img"
            />
          </button>
        </Link>
      </li>
      <li>
        <Link to="/cart">
          <button type="button" className="nav-home-btn">
            <img
              src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-cart-icon.png"
              alt="nav home"
              className="nav-home-img"
            />
          </button>
        </Link>
      </li>
    </ul>
    <ul className="navbar-list-container-desktop">
      <li>
        <Link to="/">
          <button type="button" className="home-btn-desktop">
            Home
          </button>
        </Link>
      </li>
      <li>
        <Link to="/">
          <button type="button" className="home-btn-desktop">
            Products
          </button>
        </Link>
      </li>
      <li>
        <Link to="/">
          <button type="button" className="home-btn-desktop">
            Cart
          </button>
        </Link>
      </li>
      <li>
        <button type="button" className="logout-btn-desktop">
          Logout
        </button>
      </li>
    </ul>
  </nav>
)

export default Header
