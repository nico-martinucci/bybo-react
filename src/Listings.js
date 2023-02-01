import AddListingForm from "./AddListingForm"
import ListingSearch from "./ListingSearch"
import ListingList from "./ListingList"
import { useState, useEffect } from "react";
import ByboApi from "./api";
import { Spinner, Button } from "react-bootstrap";


/**
 * Shows all listings
 *
 * State:
 * -listings
 * [{id, name, description, location, photo, price}, ...]
 *
 * RouteList => Listings
 */
function Listings() {
    const [listings, setListings] = useState({
        isLoading: true,
        data: null
    });
    const [isAdding, setIsAdding] = useState(false);

    console.log("listings:", listings)

    //TODO: add search term state
    //TODO: add in form for new listings

    useEffect(function fetchAndSetListings() {
        async function fetchListings() {
            const resp = await ByboApi.getAllListings();
            setListings(({
                isLoading: false,
                data: resp
            }))
        }
        fetchListings();
    }, []);

    /** Sets Listings "isAdding" state to false. */
    function toggleIsAdding() {
        setIsAdding(curr => !curr);
    }

    /** Adds a new listing to the current state */
    async function addNewListing(data) {
        console.log("data at top of addNewListing: ", data)
        const newListing = await ByboApi.addNewListing(data);
        console.log("newListing response from api: ", newListing)
        setListings(curr => (
            [{
                id: newListing.id,
                name: newListing.name,
                description: newListing.description,
                location: newListing.location,
                photo: newListing.photo,
                price: newListing.price
            }, ...curr]
        ))
    }


    if (listings.isLoading) return <Spinner />;


    return (
        <div>
            {!isAdding && <div>
                <Button onClick={toggleIsAdding} variant="primary" type="submit">
                    Add new listing
                </Button>
                <ListingSearch />
                <ListingList listings={listings.data} />
            </div>}
            {isAdding && <AddListingForm
                toggleIsAdding={toggleIsAdding}
                addNewListing={addNewListing}
            />}
        </div>
    )
}


export default Listings