import React from 'react';
import { Jumbotron } from 'reactstrap';

const Home = () => {
    return (
        <div className="m-3 text-center">
            <Jumbotron>
                <h1 className="display-3">Jobly</h1>
                <hr className="my-2" />
                <p>All the jobs in one, convenient place.</p>
                <p className="lead">Welcome Back!</p>
            </Jumbotron>
        </div>
    );
};

export default Home;
