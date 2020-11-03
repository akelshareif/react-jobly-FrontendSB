import React, { useState } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import JoblyAPI from '../JoblyAPI';

const ProfileForm = ({ user: { user }, getUser }) => {
    const INITIAL_STATE = {
        first_name: user.first_name,
        last_name: user.last_name,
        email: user.email,
        photoURL: user.photoURL,
        password: '',
    };

    const [formData, setFormData] = useState(INITIAL_STATE);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((data) => ({
            ...data,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        // update user upon submit
        const updatedUser = await JoblyAPI.updateUser(user.username, formData);
        const userData = updatedUser.user;

        setFormData({
            first_name: userData.first_name,
            last_name: userData.last_name,
            email: userData.email,
            photoURL: userData.photoURL,
            password: '',
        });
        getUser();
    };

    return (
        <Form className="ProfileForm" onSubmit={handleSubmit}>
            <FormGroup>
                <Label for="username">Username</Label>
                <p>{user.username}</p>
            </FormGroup>
            <FormGroup>
                <Label for="first_name">First Name</Label>
                <Input tag="input" type="text" name="first_name" onChange={handleChange} value={formData.first_name} />
            </FormGroup>
            <FormGroup>
                <Label for="last_name">Last Name</Label>
                <Input tag="input" type="text" name="last_name" onChange={handleChange} value={formData.last_name} />
            </FormGroup>
            <FormGroup>
                <Label for="email">Email</Label>
                <Input tag="input" type="email" name="email" onChange={handleChange} value={formData.email} />
            </FormGroup>
            <FormGroup>
                <Label for="photoURL">Photo URL</Label>
                <Input tag="input" type="text" name="photoURL" onChange={handleChange} value={formData.photoURL} />
            </FormGroup>
            <FormGroup>
                <Label for="password">Password</Label>
                <Input tag="input" type="password" name="password" onChange={handleChange} value={formData.password} />
            </FormGroup>
            <Button color="primary" className="mb-2" block>
                Save Changes
            </Button>
        </Form>
    );
};

export default ProfileForm;
