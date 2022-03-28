import { Link } from 'react-router-dom'

function Header() {

  return (
    <header>
      <nav>
          <Link to="/">College App</Link>
          <Link to="/login">Login</Link>
      </nav>
    </header>
  )
}

export default Header
