import { LogIn } from '../Page/LogIn'
import { Home } from '../Page/Home'

class Route {
  constructor(component, path){
    this.path = path
    this.key= path
    this.component = component
  }
}

export const routes = [
  new Route(LogIn, '/'),
  new Route(Home, '/Home'),
]
