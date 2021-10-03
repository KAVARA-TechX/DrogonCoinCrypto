import './App.css';
import { Route, Switch } from 'react-router';
import Home from './Components/Pages/Home';
import Ecosystem from './Components/Pages/Ecosystem';
import About from './Components/Pages/About';
function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Home}/>
      </Switch>
      <Switch>
        <Route exact path="/ecosystem" component={Ecosystem}/>
      </Switch>
      <Switch>
        <Route exact path="/about-drogon" component={About} />
      </Switch>
    </div>
  );
}

export default App;
