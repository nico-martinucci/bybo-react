import { Container, Stack } from "react-bootstrap";
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
    <Container>
      <Stack gap={3}>
        {listings.map(l => (
          <ListingCard
            key={l.id}
            listing={l}
          />
        ))}
      </Stack>
    </Container>
  );
}


export default ListingList