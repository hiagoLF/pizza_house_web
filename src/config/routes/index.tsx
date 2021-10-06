import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import FoodTypesPage from "../../pages/FoodTypes";
import LoginPage from "../../pages/Login";
import FoodIndexPage from "../../pages/FoodIndex";
import CartPage from "../../pages/CartPage";
import FoodsRequestsPages from "../../pages/FoodsRequests";
import PendingOrdersPage from "../../pages/PendingOrders";
import ConfirmedOrdersPage from "../../pages/ConfirmedOrders";
import ClientsPage from "../../pages/ClientsPage";
import ClientBillPage from "../../pages/ClientBillPage";
import AdmFoodsPage from "../../pages/AdmFoods";
import NewFoodsPage from "../../pages/NewFoodsPage";
import EmployeesPage from '../../pages/Employees'


const Routes: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={LoginPage} />
        <Route path="/food/types" component={FoodTypesPage} />
        <Route path="/food/index" component={FoodIndexPage} />
        <Route path="/food/cart" component={CartPage} />
        <Route path="/food/requests" component={FoodsRequestsPages} />
        <Route path="/adm/orders/pending" component={PendingOrdersPage} />
        <Route path="/adm/orders/confirmed" component={ConfirmedOrdersPage} />
        <Route path="/adm/clients" exact component={ClientsPage} />
        <Route path="/adm/clients/bill" component={ClientBillPage} />
        <Route path="/adm/foods" exact component={AdmFoodsPage} />
        <Route path="/adm/foods/new" component={NewFoodsPage} />
        <Route path="/adm/employees" component={EmployeesPage} />
      </Switch>
    </Router>
  );
};

export default Routes;
