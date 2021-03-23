import { Link } from 'react-router-dom'

export const SignLinks = () => (
  <div className="links">
    <a href="#">Log in with Google </a>
    <Link to='/AccountRecovery '>Forgot password?</Link>
  </div>
)
