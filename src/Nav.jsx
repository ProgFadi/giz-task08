import {Link} from "react-router-dom"

function Nav() {
    return (
          <nav>
              <ul>
                  <Link to="/dashboard"><li>Dashboard</li></Link>
                  <Link to="/categories"><li>Categories</li></Link>
                  <Link to="/products"><li>Products</li></Link>
              </ul>
          </nav>
    )
  }
export default Nav;