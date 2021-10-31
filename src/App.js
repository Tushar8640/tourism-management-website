import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Nav from "./Component/Navbar/Nav";
import PlaceOrder from "./Pages/PlaceOrder/PlaceOrder";
import NotFound from "./Pages/NotFound/NotFound";
import ManageEvents from "./Pages/Manage Events/ManageEvents";
import Login from "./Pages/Login/Login";
import MyOrders from "./Pages/My Orders/MyOrders";
import ContextProvider from "./ContextProvider/ContextProvider";
import PrivateRoute from "./PrivateRoute/PrivateRoute"
import Addevent from "./Pages/AddEvent/Addevent";
import Footer from "./Component/Footer/Footer";
import DashBoard from "./Pages/DashBoard/DashBoard";

function App() {
  return (
    <ContextProvider>
      <Router>
        <Nav />
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route exact path="/home">
            <Home></Home>
          </Route>
          <PrivateRoute exact path="/myorders">
            <MyOrders></MyOrders>
          </PrivateRoute>
          <PrivateRoute exact path="/placeorder/:id">
            <PlaceOrder></PlaceOrder>
          </PrivateRoute>
     
          <Route exact path="/login">
            <Login></Login>
          </Route>
      
          <PrivateRoute exact path="/dashboard">
            <DashBoard></DashBoard>
          </PrivateRoute>

          <Route exact path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>
    </ContextProvider>
  );
}

export default App;
