import { Card, Stack } from "react-bootstrap"
import { Link } from "react-router-dom"
import Listings from "./Listings";

/**
 * ListingCard: component to render a single listing card.
 * 
 * Props:
 * - listing: object representing a single listing
 * 
 * State: N/A
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
                <Card.Body>
                    <Stack direction="horizontal" gap={3}>
                        <div>
                            <Card.Img width="400px" variant="left" src={listing.photo} />
                        </div>
                        <div>
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
                        </div>
                    </Stack>
                </Card.Body>
            </Card>
        </>
    )
}


export default ListingCard