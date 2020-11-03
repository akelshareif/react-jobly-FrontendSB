import React from 'react';
import { Jumbotron, Button } from 'reactstrap';
import { Link } from 'react-router-dom';

const AnonHome = () => {
    return (
        <div className="m-3 text-center">
            <Jumbotron>
                <h1 className="display-3">Jobly</h1>
                <hr className="my-2" />
                <p>Please Login or Signup!</p>
                <Button tag={Link} to="/login" color="secondary" className="m-3">
                    Login
                </Button>
                <Button tag={Link} to="/signup" color="primary">
                    Signup
                </Button>
            </Jumbotron>
        </div>
    );
};

export default AnonHome;
