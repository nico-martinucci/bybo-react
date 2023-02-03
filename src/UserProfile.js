import ListingList from "./ListingList"
import userContext from "./userContext";
import ByboApi from "./api";
import { Card, Spinner } from "react-bootstrap"
import { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";

/**
 * User Profile Page
 *
 * Props: N/A
 * 
 * State:
 * - viewUser: current user being viewed
 *
 * RoutesList => UserProfile
 */
function UserProfile() {

    const [viewUser, setViewUser] = useState({
        data: null,
        isLoading: true
    })

    const { userId } = useParams();
    const { id } = useContext(userContext);

    useEffect(function fetchAndSetViewUser() {
        async function fetchViewUser() {
            const resp = await ByboApi.getUserDetail(userId);
            setViewUser({
                data: resp,
                isLoading: false
            })
        }
        fetchViewUser();
    }, [])

    if (viewUser.isLoading) return <Spinner />;

    let uniqueBookings = []

    for (let booking of viewUser.data.bookings) {
        const singleBooking = uniqueBookings.find(b => b.id === booking.id);
        if (singleBooking) {
            singleBooking.days.push(booking.day);
        } else {
            uniqueBookings.push({
                ...booking,
                days: [booking.day]
            });
        }
    }

    return (
        <Card>
            <Card.Title>{`${viewUser.data.username}'s Profile`}</Card.Title>
            <Card.Text>{viewUser.data.first_name} {viewUser.data.last_name}</Card.Text>
            <Card.Text>{viewUser.data.bio} </Card.Text>
            <h3>{`${viewUser.data.username}'s Listings`}</h3>
            <ListingList listings={viewUser.data.listings} />
            {+userId === id && <>
                <h3>{`${viewUser.data.username}'s Bookings`}</h3>
                <ListingList listings={uniqueBookings} />
            </>}
        </Card>

    )
}


export default UserProfile