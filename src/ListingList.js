import ListingCard from "./ListingCard"

/**
 * List of listings
 *
 * Prop:
 * -listings- [{id, name, description, location, photo, price}, ...]
 *
 * ListingList => Listing Card
 */
function ListingList({ listings }) {
    return (
       <>
        {listings.map(l => (
            <ListingCard
              key={l.id}
              listing={l}
            />
        ))}
       </>
    );
}


export default ListingList