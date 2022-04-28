import {
  BrowserRouter,
  Route,
  Switch

} from 'react-router-dom';

import { Home } from './nasa/Home';
import { Details } from './nasa/Details';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Switch>

        <Route exact path="/" component={Home} />
        <Route path="/details" component={Details} />

      </Switch>
    </BrowserRouter>
  );
}

export default App;
