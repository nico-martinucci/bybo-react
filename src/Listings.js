import AddListingForm from "./AddListingForm"
import ListingSearch from "./ListingSearch"
import ListingList from "./ListingList"
import { useState, useEffect } from "react";
import ByboApi from "./api";
import {Spinner} from "react-bootstrap";


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
    const[listings, setListings] = useState({
        isLoading: true,
        listings: null
    });

    //TODO: add search term state
    //TODO: add in form for new listings


    useEffect(function fetchAndSetListings() {
        async function fetchListings() {
            const resp = await ByboApi.getAllListings();
            setListings(({
                isLoading: false,
                listings: resp
            }))
        }
        fetchListings();
    }, []);


    if (listings.isLoading) return <Spinner />;


    return (
       <div>
        <ListingSearch />
        <ListingList listings={listings}/>
       </div>
    )
}


export default Listings