import ListingList from "./ListingList"
import userContext from "./userContext";

import { Card } from "react-bootstrap"

/**
 * User Profile Page
 *
 * Props:
 * -user
 *
 * RoutesList => UserProfile
 */
function UserProfile({ user }) {

    console.log("user", user);

    let uniqueBookings = []

    for (let booking of user.bookings) {
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

    console.log("unique bookings: ", uniqueBookings);

    return (
        <Card>
            <Card.Title>{`${user.username}'s Profile`}</Card.Title>
            <Card.Text>{user.first_name} {user.last_name}</Card.Text>
            <Card.Text>{user.bio} </Card.Text>
            <ListingList listings={user.listings} />
            <ListingList listings={uniqueBookings} />
        </Card>

    )
}


export default UserProfile