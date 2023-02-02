import { Card } from "react-bootstrap"
/**
 * TODO:
 */
function ListingCard({ listing }) {

    return (
        <>
            <Card>
                <Card.Img width="150px" variant="left" src={listing.photo} />
                <Card.Body>
                    <Card.Title>
                        {listing.name}
                    </Card.Title>
                    <Card.Text>
                        {listing.price}
                        {listing.location}
                    </Card.Text>
                    <Card.Text>
                        {listing.description}
                    </Card.Text>
                </Card.Body>
            </Card>
        </>
    )
}


export default ListingCard