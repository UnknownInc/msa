import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { observer } from "mobx-react-lite";


import './App.css';

import HomePage from './pages/Home';

const App = observer(( )=>{
  return (
    <Router>
      <main>
        <Switch>
          <Route path="/">
            <HomePage />
          </Route>
        </Switch>
      </main>
    </Router>
  );
});

export default App;
