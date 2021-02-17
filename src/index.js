import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import Kermo from './Kermo';
import Monke from './Monke';
import { HashRouter, Route, Switch, Link } from "react-router-dom";

ReactDOM.render(
     <HashRouter>
        <div>
            <Switch>
                <Route exact path="/" exact component={Kermo} />
                <Route exact path="/monke" exact component={Monke} />
            </Switch>
        </div>
      </HashRouter>,
  document.getElementById('root')
);
