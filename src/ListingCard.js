import { Card, Stack } from "react-bootstrap"
import { Link } from "react-router-dom"
import Listings from "./Listings";
import currency from "currency.js";

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
                            <div>
                                {currency(listing.price, { seperator: "," }).format()} per Day
                            </div>
                            <div>
                                {listing.location}
                            </div>
                            <div className="mt-2">
                                {listing.description}
                            </div>
                        </div>
                    </Stack>
                </Card.Body>
            </Card>
        </>
    )
}


export default ListingCard