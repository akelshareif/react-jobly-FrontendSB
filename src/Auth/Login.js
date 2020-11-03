import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Form, FormGroup, Input, Button, Label, Alert } from 'reactstrap';
import JoblyAPI from '../JoblyAPI';

const Login = ({ getUser }) => {
    const [formData, setFormData] = useState({
        username: '',
        password: '',
    });

    const [isInvalidLogin, setIsInvalidLogin] = useState(false);

    const history = useHistory();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((data) => ({
            ...data,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await JoblyAPI.login(formData);
            setIsInvalidLogin(false);
            await getUser();
            history.push('/jobs');
        } catch (e) {
            setIsInvalidLogin(true);
        }
    };

    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-6 mt-3">
                    <h3 className="text-center">Login</h3>
                    {isInvalidLogin ? (
                        <Alert color="danger" className="text-center">
                            Invalid username and/or password
                        </Alert>
                    ) : null}
                    <Form onSubmit={handleSubmit}>
                        <FormGroup>
                            <Label for="username">Username</Label>
                            <Input
                                tag="input"
                                type="text"
                                name="username"
                                onChange={handleChange}
                                value={formData.username}
                                required
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label for="password">Password</Label>
                            <Input
                                tag="input"
                                type="password"
                                name="password"
                                onChange={handleChange}
                                value={formData.password}
                                required
                            />
                        </FormGroup>
                        <Button color="primary">Login</Button>
                    </Form>
                </div>
            </div>
        </div>
    );
};

export default Login;
