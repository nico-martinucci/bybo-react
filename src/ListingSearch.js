import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
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

    async function handleSubmit(evt) {
        evt.preventDefault();
        // TODO: don't reset form here; reset on "clear"
        setFormData(inititalFormData); 
        changeSearchTerm(formData.term);
    }
    // TODO: add a clear searhc button; improve spacing; shorten search box
    return (
        <Form onSubmit={handleSubmit}>
            <Form.Label>Search by Name</Form.Label>
            <Form.Control
                name="term"
                value={formData.term}
                onChange={handleChange}
            />
            <Button variant="primary" type="submit">
                Search
            </Button>
        </Form>
    )
}


export default ListingSearch