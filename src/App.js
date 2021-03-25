import { Route } from 'react-router-dom'
import { routes }from './Routes/routes'
import { UserProvider } from './Context/UserContext'

import {
  BrowserRouter as BR,
  Switch,
} from 'react-router-dom'

import './Sass/Index.scss';

export const App = () => (
  <BR>
    <Switch>
    <UserProvider>
      {
        routes.map(({path, component}) =>
          <Route exact
            key={path}
            path={path}
            component={component}
          />
        )
      }
    </UserProvider>
    </Switch>
  </BR>
)
