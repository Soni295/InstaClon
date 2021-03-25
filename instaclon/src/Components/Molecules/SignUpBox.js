import { Link } from 'react-router-dom'

export const SignUpBox = () => {
  return(
    <div className="sign-up">
      <p>
        Don't have an account?
        <Link to='/SingUp'> Sign up</Link>
      </p>
    </div>
  )
}
