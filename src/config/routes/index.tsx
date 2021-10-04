import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import FoodTypesPage from "../../pages/FoodTypes";
import LoginPage from '../../pages/Login'
import FoodIndexPage from "../../pages/FoodIndex";
import CartPage from '../../pages/CartPage'

const Routes: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route path='/' exact component={LoginPage}/>
        <Route path='/food/types' component={FoodTypesPage}/>
        <Route path='/food/index' component={FoodIndexPage}/>
        <Route path='/food/cart' component={CartPage}/>
      </Switch>
    </Router>
  );
};

export default Routes;
