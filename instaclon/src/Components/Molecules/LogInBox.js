import { SignLinks } from './SignLinks'
import { FormLogin } from './FormLogIn'
import { Separator } from '../Atoms/Separator'
export const LogInBox = () => {
  return(
    <div className="form-log-in">
      <h1>InstaClon</h1>
      <FormLogin/>
      <Separator>or</Separator>
      <SignLinks />
    </div>
  )
}
