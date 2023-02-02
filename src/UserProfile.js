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

    return (
        <Card>
        <Card.Title>{`${user.username}'s Profile`}</Card.Title>
        <Card.Text>{user.first_name} {user.last_name}</Card.Text>
        <Card.Text>{user.bio} </Card.Text>
        <ListingList listings={user.listings}/>

    </Card>

    )
}


export default UserProfile