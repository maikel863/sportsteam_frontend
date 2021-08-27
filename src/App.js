import './App.css';
import { Route, Switch, Link, } from 'react-router-dom';
import IndexPage from './components/IndexPage';
import PlayerPage from './components/PlayerPage';

function App() {
  return (
    <div className="App">
      <div className="header">
        <Route path='/'>
        <Link className="index-link" to={`/`}><p className="index-link">HomePage</p></Link>
        </Route>
      </div>

      <Switch>
        <Route exact path='/'>
          <IndexPage />
        </Route>

        <Route path="/players/:id">
          <PlayerPage />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
