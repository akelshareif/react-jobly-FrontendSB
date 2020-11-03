import React, { useState, useEffect } from 'react';
import jwt from 'jsonwebtoken';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import NavBar from './Nav/NavBar';
import AnonNav from './Nav/AnonNav';
import Home from './Home/Home';
import AnonHome from './Home/AnonHome';
import Companies from './Companies/CompaniesList';
import CompanyDetails from './Companies/CompanyDetails';
import Jobs from './Jobs/JobsList';
import Profile from './Profile/Profile';
import LoginPage from './Auth/Login';
import SignupPage from './Auth/Signup';
import JoblyAPI from './JoblyAPI';

const App = () => {
    const [currUser, setCurrUser] = useState(null);

    const getCurrentUser = async () => {
        const token = localStorage.getItem('_token');

        try {
            const { username } = jwt.decode(token);
            const user = await JoblyAPI.getCurrentUser(username);
            setCurrUser(user);
        } catch (e) {
            console.error(e);
            setCurrUser(null);
        }
    };

    const logoutUser = () => {
        localStorage.removeItem('_token');
        setCurrUser(null);
    };

    useEffect(() => {
        const getCurrUser = async () => {
            await getCurrentUser();
        };

        getCurrUser();
    }, []);

    return (
        <div className="App">
            <BrowserRouter>
                {currUser ? <NavBar logout={logoutUser} /> : <AnonNav />}
                <Switch>
                    <Route exact path="/">
                        {currUser ? <Home /> : <AnonHome />}
                    </Route>
                    <Route exact path="/companies">
                        <Companies user={currUser} />
                    </Route>
                    <Route exact path="/companies/:handle">
                        <CompanyDetails user={currUser} />
                    </Route>
                    <Route exact path="/jobs">
                        <Jobs user={currUser} />
                    </Route>
                    <Route exact path="/profile">
                        <Profile user={currUser} getUser={getCurrentUser} />
                    </Route>
                    <Route exact path="/login">
                        <LoginPage getUser={getCurrentUser} />
                    </Route>
                    <Route exact path="/signup">
                        <SignupPage getUser={getCurrentUser} />
                    </Route>
                    <Redirect to="/" />
                </Switch>
            </BrowserRouter>
        </div>
    );
};

export default App;
