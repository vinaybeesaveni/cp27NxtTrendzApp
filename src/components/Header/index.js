import './index.css'

const Header = () => (
  <nav className="navbar">
    <div className="home-logo-logout-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
        alt="website logo"
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
  <ul className="navbar-list-container-desktop">
      <li className="home-btn-desktop">Home</li>
      <li className="home-btn-desktop">Products</li>
      <li className="home-btn-desktop">Cart</li>
      <li>
        <button type="button" className="logout-btn-desktop">
          Logout
        </button>
      </li>
    </ul>
    <ul className="navbar-list-container-mobile">
      <li>
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-icon.png"
          alt="nav home"
          className="nav-home-img"
        />
      </li>
      <li>
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-products-icon.png"
          alt="nav home"
          className="nav-home-img"
        />
      </li>
      <li>
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-cart-icon.png"
          alt="nav home"
          className="nav-home-img"
        />
      </li>
    </ul>
    
  </nav>
)

export default Header
