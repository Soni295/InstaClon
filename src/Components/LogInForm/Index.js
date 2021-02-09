import Form from './Form'
import Links from './links'
import Separator from '../Global/Separator'

const LogInForm = () => {
  return(
    <div className="main">
      <div className="cel-carussel hide-for-phone">
      </div>
      <div className="form-log-in">
        <h1>InstaClon</h1>
        <Form />
        <Separator>or</Separator>
        <Links />
      </div>

      <div className="sign-up">
        <p>
          Don't have an account?
          <a href="#"> Sing up</a>
        </p>
      </div>
    </div>
  )
}
export default LogInForm
