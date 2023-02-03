import { Card } from "react-bootstrap"
import { Link } from "react-router-dom"
import Listings from "./Listings";

/**
 * TODO:
 */
function ListingCard({ listing }) {

    const linkStyle = { color: "inherit" };

    const dayLookup = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
    ]

    return (
        <>
            <Card>
                <Card.Img width="150px" variant="left" src={listing.photo} />
                <Card.Body>
                    <Card.Title>
                        <Link style={linkStyle} to={`/listings/${listing.id}`}>{listing.name}</Link>
                    </Card.Title>
                    <Card.Text>
                        {listing.price}
                        {listing.location}
                    </Card.Text>
                    <Card.Text>
                        {listing.description}
                    </Card.Text>
                    {listing.days &&
                        <Card.Text>
                            Booked: {listing.days.map(d => <span key={d}>{dayLookup[d]} </span>)}
                        </Card.Text>
                    }
                </Card.Body>
            </Card>
        </>
    )
}


export default ListingCard