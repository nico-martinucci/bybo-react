import { useState } from "react";
import { useNavigate } from 'react-router-dom';

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const inititalFormData = {
    username: "",
    password: ""
};

/**
 * Form for logging in.
 *
 *State:
 *-formData, formError
 *
 * Props:
 * -handleLogin: function to call in parent.
 *
 * RouteList => LoginForm
 */
function LoginForm({ handleLogin }) {
    const [formData, setFormData] = useState(inititalFormData);

    const navigate = useNavigate();

    /** Update form input. */

    function handleChange(evt) {
        const { name, value } = evt.target;
        setFormData(fd => ({
        ...fd,
        [name]: value
        }));
    }

    /** Call parent function and clear form. */

    async function handleSubmit(evt) {
        evt.preventDefault();

        await handleLogin(formData);
        setFormData(inititalFormData);
        navigate("/");
    }

    return (
        <Form onSubmit={handleSubmit}>
            <Form.Label>Username</Form.Label>
            <Form.Control
                name="username"
                value={formData.username}
                onChange={handleChange}
                required
            />
            <Form.Label>Password</Form.Label>
            <Form.Control
                name="password"
                value={formData.password}
                onChange={handleChange}
                type="password"
                required
            />
            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>
    )
}


export default LoginForm