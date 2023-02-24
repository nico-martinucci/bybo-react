import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useState } from 'react';

const inititalFormData = { term: "" }

/**
 * TODO:
 */
function ListingSearch({ changeSearchTerm }) {
    const [formData, setFormData] = useState(inititalFormData);

    /** Update form input. */

    function handleChange(evt) {
        const { name, value } = evt.target;
        setFormData(fd => ({
            ...fd,
            [name]: value
        }));
    }

    /** Call parent function and clear form. */
    function handleSearch(evt) {
        evt.preventDefault();
        changeSearchTerm(formData.term);
    }

    function handleClear(evt) {
        evt.preventDefault();
        setFormData(inititalFormData);
        changeSearchTerm("");
    }

    // TODO: add a clear searhc button; improve spacing; shorten search box
    return (
        <Container>
            <Form onSubmit={handleSearch}>
                <Form.Label>Search by Name</Form.Label>
                <Row className="my-2">
                    <Col xs={6}>
                        <Form.Control
                            className="col-6"
                            name="term"
                            value={formData.term}
                            onChange={handleChange}
                        />
                    </Col>
                    <Col md="auto">
                        <Button className="" variant="primary" type="submit">
                            Search
                        </Button>
                    </Col>
                    <Col md="auto">
                        <Button className="" variant="outline-primary" onClick={handleClear}>
                            Clear
                        </Button>
                    </Col>
                </Row>
            </Form>
        </Container>
    )
}


export default ListingSearch