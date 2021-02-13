import './Sass/Index.scss';
import { Route } from 'react-router-dom'
import { routes }from './Routes/routes'
import {
  BrowserRouter as BR,
  Switch, 
} from 'react-router-dom'

const App = () => (
  <BR> 
    <Switch>
      {
        routes.map(({path, component}) =>
          <Route exact
            key={path}
            path={path}
            component={component}
          />
        )
      }
    </Switch>
  </BR> 
)
export default App;
