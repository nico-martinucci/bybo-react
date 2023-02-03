import { useState, useRef, useContext } from "react"
import { Form, Button } from "react-bootstrap"
import userContext from "./userContext";


const inititalFormData = {
    name: "Backyard",
    description: "it's great!",
    location: "anywhere",
    size: "medium",
    price: "100",
    hasBarbecue: false,
    hasPool: false,
    isFenced: false
}

/**
 * AddListingForm: component to render a form to add a new list.
 * 
 * State: 
 * - formData: current data in the form
 * - selectedFile: currently added form file
 * 
 * Props:
 * - toggleIsAdding: function to toggle parent state, whether a listing is
 * being added or not
 * - addNewListing: function to add new listing to parent state
 * 
 * Listing => AddListingForm
 */
function AddListingForm({ toggleIsAdding, addNewListing }) {
    const [formData, setFormData] = useState(inititalFormData);
    const [selectedFile, setSelectedFile] = useState(null);

    const { id } = useContext(userContext);

    /** Update form input. */
    function handleChange(evt) {
        const { name, value } = evt.target;
        setFormData((fData) => ({
            ...fData,
            [name]: value,
        }));
    }

    function handleSubmit(evt) {
        evt.preventDefault();
        toggleIsAdding();

        const data = new FormData();

        for (let input in formData) {
            data.append(input, formData[input]);
        }

        data.append("photo", selectedFile)
        data.append("userId", id)

        addNewListing(data);
    }

    function handleFileSelect(evt) {
        setSelectedFile(evt.target.files[0]);
    }

    return (
        <Form onSubmit={handleSubmit}>
            <Form.Label>Name</Form.Label>
            <Form.Control
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
            />
            <Form.Label>Description</Form.Label>
            <Form.Control
                name="description"
                value={formData.description}
                onChange={handleChange}
                required
            />
            <Form.Label>Location</Form.Label>
            <Form.Control
                name="location"
                value={formData.location}
                onChange={handleChange}
                required
            />
            <Form.Label>Size</Form.Label>
            <Form.Select
                name="size"
                value={formData.size}
                onChange={handleChange}
                required
            >
                <option value="small">Small</option>
                <option value="medium">Medium</option>
                <option value="large">Large</option>
            </Form.Select>
            <Form.Label>Price</Form.Label>
            <Form.Control
                name="price"
                value={formData.price}
                onChange={handleChange}
                required
            />
            <Form.Label>Has pool?</Form.Label>
            <Form.Check
                name="hasPool"
                type="checkbox"
                value={formData.hasPool}
                onChange={handleChange}
            />
            <Form.Label>Has barbecue?</Form.Label>
            <Form.Check
                name="hasBarbecue"
                type="checkbox"
                value={formData.hasBarbecue}
                onChange={handleChange}
            />
            <Form.Label>Is fully fenced?</Form.Label>
            <Form.Check
                name="isFenced"
                type="checkbox"
                value={formData.isFenced}
                onChange={handleChange}
            />
            <Form.Label>Add a picture</Form.Label>
            <Form.Control
                name="photo"
                type="file"
                onChange={handleFileSelect} />
            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>
    )
}


export default AddListingForm