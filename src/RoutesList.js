import Home from "./Home"
import Listings from "./Listings"
import UserProfile from "./UserProfile"
import ListingDetail from "./ListingDetail"
import LoginForm from "./LoginForm"
import SignupForm from "./SignupForm"
import { Routes, Route, Navigate } from "react-router-dom"
import userContext from "./userContext";
import { useContext } from "react"

/**
 * RoutesList: includes all Route components for the app.
 * 
 * Props:
 * - handleLogin: log in a user
 * - handleRegister: registers a new user
 * - addUserListing: adds a new listing object to the current user's listings
 * - addUserBooking: adds a new booking object to the current user's bookings
 * 
 * State: N/A
 * 
 * App => RoutesList
 */
function RoutesList({ handleLogin, handleRegister, addUserListing, addUserBooking }) {

    const { username } = useContext(userContext);

    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/listings" element={
                <Listings addUserListing={addUserListing} />
            } />
            <Route path="/users/:userId" element={
                <UserProfile />
            } />
            <Route path="/listings/:listingId" element={
                <ListingDetail addUserBooking={addUserBooking} />
            } />
            {!username &&
                <>
                    <Route path="/login" element={
                        <LoginForm handleLogin={handleLogin} />
                    } />
                    <Route path="/signup" element={
                        <SignupForm handleRegister={handleRegister} />
                    } />
                </>
            }
            <Route path="*" element={<Navigate to="/" />} />
        </Routes>
    )
}


export default RoutesList