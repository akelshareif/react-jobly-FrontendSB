import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import NavBar from './Nav/NavBar';
import Home from './Home/Home';
import Companies from './Companies/CompaniesList';
import Jobs from './Jobs/JobsList';

const App = () => {
    return (
        <div className="App">
            <BrowserRouter>
                <NavBar />
                <Switch>
                    <Route exact path="/">
                        <Home />
                    </Route>
                    <Route exact path="/companies">
                        <Companies />
                    </Route>
                    <Route exact path="/jobs">
                        <Jobs />
                    </Route>
                    <Route exact path="/profipath"></Route>
                </Switch>
            </BrowserRouter>
        </div>
    );
};

export default App;
