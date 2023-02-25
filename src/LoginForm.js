import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { Col, Container, Row } from "react-bootstrap";
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
        <Container>
            <Row className="mt-4">
                <Col xs={12} md={6}>
                    <h3>Log In</h3>
                    <Form onSubmit={handleSubmit}>
                        <div className="mt-3">
                            <Form.Label>Username</Form.Label>
                            <Form.Control
                                name="username"
                                value={formData.username}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="mt-3">
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                                name="password"
                                value={formData.password}
                                onChange={handleChange}
                                type="password"
                                required
                            />
                        </div>
                        <Button className="mt-3" variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    )
}


export default LoginForm