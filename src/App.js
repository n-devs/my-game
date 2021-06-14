import React from 'react';
// import logo from './logo.svg';
import './game.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  // useLocation
} from "react-router-dom";
// import { TransitionGroup, CSSTransition } from 'react-transition-group';
import HomeView from './views/Home';
import NewGameView from './views/NewGame'
import GameView from './views/Game'
function App() {
  // let location = useLocation();
  return (
    <Router>
      {/* <TransitionGroup className={`transition-group`}>
        <CSSTransition
          key={window.location.pathname}
          timeout={{ enter: 800, exit: 400 }}
          classNames={'transition-wrap'}

        > */}
      <Switch >
        <Route exact path="/">
          <HomeView />
        </Route>
        <Route path="/game">
          <GameView />
        </Route>
        <Route path="/new-game">
          <NewGameView />
        </Route>
        <Route path="/load-save">
          {/* <About /> */}
        </Route>
        <Route path="/setting">
          {/* <Dashboard /> */}
        </Route>
      </Switch>
      {/* </CSSTransition>
      </TransitionGroup> */}
    </Router>
  );
}

export default App;
