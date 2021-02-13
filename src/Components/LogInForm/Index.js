import { LogiInForm } from './Form'
import { Links } from './links'
import { Separator } from '../Global/Separator'

export const LogInBox = () => {
  return(
    <>
      <div className="form-log-in">
        <h1>InstaClon</h1>
        <LogiInForm />
        <Separator>or</Separator>
        <Links />
      </div>

      <div className="sign-up">
        <p>
          Don't have an account?
          <a href="#"> Sing up</a>
        </p>
      </div>
    </>
  )
}
