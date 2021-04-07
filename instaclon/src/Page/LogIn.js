import { RedirectHome } from './Redirects'
import { TemplaceLogIn } from '../Components/Templace/TemplaceLogIn'
import { CelCarussel } from '../Components/Templace/CelCarussel'

export const LogIn = () => (
    <RedirectHome>
      <div className="main">
        <CelCarussel />
        <TemplaceLogIn />
      </div>
    </RedirectHome>
)
