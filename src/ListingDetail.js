import { useState, useEffect } from "react"
import { useParams } from "react-router-dom";
import ByboApi from "./api";
import { Spinner, Card } from "react-bootstrap";

/**
 * TODO:
 */
function ListingDetail() {
    const [listing, setListing] = useState({
        data: null,
        isLoading: true
    })

    console.log(listing.data);

    const { listingId } = useParams();

    useEffect(function fetchAndSetListing() {
        async function fetchListing() {
            const resp = await ByboApi.getListingDetail(listingId);
            setListing(({
                isLoading: false,
                data: resp
            }))
        }
        fetchListing();
    }, []);

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
        </Card>
    )
}


export default ListingDetail