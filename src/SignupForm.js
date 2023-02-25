import { useState } from "react";
import { useNavigate } from 'react-router-dom';

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import { Col, Container, Row } from "react-bootstrap";

const inititalFormData = {
    username: "",
    password: "",
    firstName: "",
    lastName: "",
    email: "",
    bio: ""
};

/**
 * Form to signup user
 *
 * State:
 * -formData
 *
 * props:
 * -handleRegister
 *
 * RouteList => SignupForm
 */
function SignupForm({ handleRegister }) {
    const [formData, setFormData] = useState(inititalFormData);

    const navigate = useNavigate();

    /** Update form input */
    function handleChange(evt) {
        const input = evt.target;
        setFormData(formData => ({
            ...formData,
            [input.name]: input.value,
        }));
    }

    /** Call parent function and clear form */
    async function handleSubmit(evt) {
        evt.preventDefault();

        await handleRegister(formData);
        setFormData(inititalFormData);
        navigate("/");
    }

    return (
        <Container>
            <Row className="mt-4">
                <Col xs={12} md={6}>
                    <h3>Sign Up</h3>
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
                        <div className="mt-3">
                            <Form.Label>First Name</Form.Label>
                            <Form.Control
                                name="firstName"
                                value={formData.firstName}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="mt-3">
                            <Form.Label>Last Name</Form.Label>
                            <Form.Control
                                name="lastName"
                                value={formData.lastName}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="mt-3">
                            <Form.Label>Email</Form.Label>
                            <Form.Control
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                type="email"
                                required
                            />
                        </div>
                        <div className="mt-3">
                            <Form.Label>Bio</Form.Label>
                            <Form.Control
                                as="textarea"
                                rows={3}
                                name="bio"
                                value={formData.bio}
                                onChange={handleChange}
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


export default SignupForm