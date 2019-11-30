import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import logo from './pictures/USC-Games_CardOnWhite_Horiz.png';
import 'antd/dist/antd.css';
import './App.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Button } from 'antd';
import 'element-theme-default';

import Main from './pages/Main';

function App() {
  return (
    <Router className="App">
        <Switch>
            <Route basename="/light_chaser"/>
            <Route exact path="/">
                <div className="App-bg"></div>
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h1>Light Chaser</h1>
                    <Link to='/main'><Button type='primary'>Click to Start</Button></Link>
                </header>
                <div>
                    <div className="cube Cube-left"></div>
                </div>
            </Route>
            <Route path="/main" component={Main}>
            </Route>
        </Switch>
    </Router>
  );
}

export default App;
