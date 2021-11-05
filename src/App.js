import './App.css';
import { Route, Switch } from 'react-router';
import Home from './Components/Pages/Home';
import Ecosystem from './Components/Pages/Ecosystem';
import About from './Components/Pages/About';
import Login from './Components/Pages/Login';
import ForgotPassword from './Components/Pages/ForgotPassword';
import SignIn from './Components/Pages/SignIn';
import Dashboard from './Components/Pages/Dashboard';
import 'antd/dist/antd.css';
import Transactions from './Components/Pages/Transactions';
import Profile from './Components/Pages/Profile';
function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/ecosystem" component={Ecosystem}/>
        <Route exact path="/about-drogon" component={About} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/forgot-password" component={ForgotPassword} />
        <Route exact path="/create-account" component={SignIn} />
        <Route exact path="/dashboard" component={Dashboard} />
        <Route exact path="/transaction" component={Transactions} />
        <Route exact path="/profile" component={Profile} />
      </Switch>
    </div>
  );
}

export default App;
