import ListingList from "./ListingList"
import userContext from "./userContext";
import ByboApi from "./api";
import { Container } from "react-bootstrap"
import { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import LoadingPage from "./LoadingPage";

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

    if (viewUser.isLoading) return <LoadingPage />;

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
        <Container>
            <h3>{`${viewUser.data.username}'s Profile`}</h3>
            <h5>{viewUser.data.first_name} {viewUser.data.last_name}</h5>
            <p>{viewUser.data.bio}</p>
            <div className="mt-4">
                <h3>{`${viewUser.data.username}'s Listings`}</h3>
                <ListingList listings={viewUser.data.listings} />
            </div>
            {+userId === id && <div className="mt-4">
                <h3>{`${viewUser.data.username}'s Bookings`}</h3>
                <ListingList listings={uniqueBookings} />
            </div>}
        </Container>
    )
}


export default UserProfile