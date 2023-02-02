import { useState, useEffect } from "react"
import { useParams } from "react-router-dom";
import ByboApi from "./api";
import { Spinner, Card, Button } from "react-bootstrap";

/**
 * TODO:
 */
function ListingDetail() {
    const [listing, setListing] = useState({
        data: null,
        isLoading: true
    })
    const [bookings, setBookings] = useState([
        { code: 0, name: "Sunday", status: "available" },
        { code: 1, name: "Monday", status: "available" },
        { code: 2, name: "Tuesday", status: "available" },
        { code: 3, name: "Wednesday", status: "available" },
        { code: 4, name: "Thursday", status: "available" },
        { code: 5, name: "Friday", status: "available" },
        { code: 6, name: "Saturday", status: "available" },
    ])

    const sampleBookings = [0, 2, 3]

    console.log(bookings);

    const { listingId } = useParams();

    useEffect(function fetchAndSetListing() {
        async function fetchListing() {
            const resp = await ByboApi.getListingDetail(listingId);
            setListing(({
                isLoading: false,
                data: resp
            }))
            // TODO: update this from sampleBookigns to actual listing state data
            setBookings(curr => curr.map(b => {
                if (sampleBookings.includes(b.code)) {
                    return {
                        ...b,
                        status: "booked"
                    };
                }
                return b;
            }))
        }
        fetchListing();
    }, []);

    /** Handles clicking a day button, updating it's state to be selected */
    function handleDayButtonClick(evt) {
        console.log(evt.target.id);
        setBookings(curr => curr.map(b => {
            if (b.code === +evt.target.id) {
                return {
                    ...b,
                    status: "clicked"
                };
            }
            return b;
        }))
    }

    /** Handles clicking the book it button, add new bookings. */
    function addNewBooking(evt) {

    }

    if (listing.isLoading) return <Spinner />;

    const l = listing.data;

    return (
        <Card>
            <Card.Title>{l.name}</Card.Title>
            <Card.Text>hosted by {l.host.username} | {l.location}</Card.Text>
            <Card.Img variant="left" width="600px" src={l.photo} />
            <Card.Text>{l.description}</Card.Text>
            <Card.Text>
                {l.has_pool && "Pool! "}
                {l.has_barbecue && "Barbecue! "}
                {l.is_fenced && "Fenced!"}
            </Card.Text>
            <Card.Text>Size: {l.size}</Card.Text>
            <Card.Text>{l.price} per hour</Card.Text>
            {bookings.map(b => (
                <div key={b.code}>
                    {b.status === "available" &&
                        <Button
                            id={b.code}
                            variant="outline-primary"
                            onClick={handleDayButtonClick}
                        >
                            {b.name}
                        </Button>
                    }
                    {b.status === "booked" &&
                        <Button
                            id={b.code}
                            variant="outline-secondary"
                            disabled
                            onClick={handleDayButtonClick}
                        >
                            {b.name}
                        </Button>
                    }
                    {b.status === "clicked" &&
                        <Button
                            id={b.code}
                            variant="primary"
                            onClick={handleDayButtonClick}
                        >
                            {b.name}
                        </Button>
                    }
                </div>
            ))}
            <div>
                <Button variant="info">Book it!</Button>
            </div>
        </Card>
    )
}


export default ListingDetail

/*
steps for booking a listing:
- render a set of buttons at the bottom of listing, one for each day of week
-   if a day has been booked (i.e. in listing state), render it disabled
- add'l button to "book" the selected days
- clicking on a button will just select that day (modify some state of selected days)
- clicking "book" button will send api request to book those days

scenarios:
- no one has booked any days: all buttons are available to click
- ANYONE has booked days: those are disabled, rest are available to click
*/