import React, { Component } from 'react';
import RecipeList from './components/Recipe/RecipeList';
import CardDetails from './components/PaymentGateway/CardDetails';
import OTP from './components/PaymentGateway/OTP';
import PaymentSuccess from './components/PaymentGateway/PaymentSuccess';
import PaymentFailed from './components/PaymentGateway/PaymentFailed';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

class App extends Component {

  render() {
    return (
      <Router>
        <div>
          <Switch>
            <Route path="/payment-page" component={CardDetails}/>
            <Route path="/otp" component={OTP}/>
            <Route path="/payment-success" component={PaymentSuccess}/>
            <Route path="/payment-failed" component={PaymentFailed}/>
            <Route path="/" component={RecipeList}/>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
