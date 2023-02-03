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
 * TODO:
 */
function RoutesList({ handleLogin, handleRegister, user, addUserListing, addUserBooking }) {

    const { username } = useContext(userContext);

    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/listings" element={
                <Listings addUserListing={addUserListing}/>
            } />
            <Route path="/users/:userId" element={
                <UserProfile user={user}/>
            } />
            <Route path="/listings/:listingId" element={
                <ListingDetail addUserBooking={addUserBooking}/>
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
            <Route path="*" element={<Navigate to="/" />}/>
        </Routes>
    )
}


export default RoutesList