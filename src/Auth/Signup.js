import React, { useState } from 'react';
import { Form, FormGroup, Input, Button, Label, Alert } from 'reactstrap';
import { useHistory } from 'react-router-dom';

import JoblyAPI from '../JoblyAPI';

const Signup = ({ getUser }) => {
    const [formData, setFormData] = useState({
        username: '',
        password: '',
        first_name: '',
        last_name: '',
        email: '',
        photoURL: '',
    });

    const [isExistingUser, setIsExistingUser] = useState(false);

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
            await JoblyAPI.register(formData);
            setIsExistingUser(false);
            await getUser();
            history.push('/jobs');
        } catch (e) {
            setIsExistingUser(true);
        }
    };

    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-6 mt-3">
                    <h3 className="text-center">Sign Up</h3>
                    {isExistingUser ? (
                        <Alert color="danger" className="text-center">
                            User with username <b>{formData.username}</b> already exists
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
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label for="first_name">First Name</Label>
                            <Input
                                tag="input"
                                type="text"
                                name="first_name"
                                onChange={handleChange}
                                value={formData.first_name}
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label for="last_name">Last Name</Label>
                            <Input
                                tag="input"
                                type="text"
                                name="last_name"
                                onChange={handleChange}
                                value={formData.last_name}
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label for="email">Email</Label>
                            <Input tag="input" type="email" name="email" onChange={handleChange} value={formData.email} />
                        </FormGroup>
                        <FormGroup>
                            <Label for="photoURL">Photo URL</Label>
                            <Input
                                tag="input"
                                type="text"
                                name="photoURL"
                                onChange={handleChange}
                                value={formData.photoURL}
                            />
                        </FormGroup>
                        <Button color="primary">Sign Up</Button>
                    </Form>
                </div>
            </div>
        </div>
    );
};

export default Signup;
