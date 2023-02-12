# BYBO
Front-end application for "Backyards By Owner" web application built with React

Full application deployed at: https://bybo-react-nm.surge.sh/

Backend repository: https://github.com/nico-martinucci/bybo-flask

## Features
- User authentication/authorization
- Ability to post new listings and view existing listings
- Basic "booking" feature to reserve a listing for a day of the week
- Ability to upload photos for listings

## Setting it up
1. Install dependencies:
```
$ npm i
```

2. Add environemnt variable:
```
$ REACT_APP_BASE_URL=bybo-flask-nm.onrender.com/
```

3. Run the application:
```
$ npm start
```

## Tech
- React, Reactstrap, Axios

## // TODO
- Update visual display of listings & listing lists
- Add user profile edit feature
- Add functionality for listing owners to "manage" bookings (see who's booked, remove bookings, etc.)
- Add booker/host messaging system
- Add rating and review system
- Write tests