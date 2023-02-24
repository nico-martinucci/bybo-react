import axios from "axios";

// const BASE_URL = process.env.REACT_APP_BASE_URL || "http://localhost:5001";
const BASE_URL = "https://bybo-flask-nm.onrender.com"

/** API Class.
 *
 * Static class tying together methods used to get/send to to the API.
 * There shouldn't be any frontend-specific stuff here, and there shouldn't
 * be any API-aware stuff elsewhere in the frontend.
 *
 */

class ByboApi {
  // Remember, the backend needs to be authorized with a token
  // We're providing a token you can use to interact with the backend API
  // DON'T MODIFY THIS TOKEN
  static token;

  static async request(endpoint, data = {}, method = "get", addlHeaders = {}) {

    const url = `${BASE_URL}/${endpoint}`;
    const headers = {
      ...addlHeaders,
      Authorization: `Bearer ${ByboApi.token}`
    };
    const params = (method === "get")
      ? data
      : {};

    console.debug("API Call:", endpoint, data, method, headers);
    try {
      return (await axios({ url, method, data, params, headers })).data;
    } catch (err) {
      console.error("API Error:", err.response);
      let message = err.response.data.error.message;
      throw Array.isArray(message) ? message : [message];
    }
  }

  // Individual API routes

  //TODO: add delete booking, get to_user messages, get from_user messages,
  // send new message

  /** Adds a new listing */

  static async addNewListing(data) {
    const res = await this.request(
      "api/listings",
      data,
      "post",
      { "Content-Type": "multipart/form-data" }
    );

    return res.listing;
  }

  /** Get details on a listing by id. */

  static async getListingDetail(listingId) {
    const res = await this.request(`api/listings/${listingId}`);
    return res.listing;
  }

  /** Get all listings */
  static async getAllListings(term="") {
    const res = await this.request(`api/listings?name=${term}`);
    return res.listings;
  }

  /** Creates a new booking */

  static async createNewBooking(listingId, data) {
    const res = await this.request(
      `api/listings/${listingId}/bookings`,
      data,
      "post"
    );
    return res.booked;
  }


  /** Login user */

  static async loginUser(data) {
    const res = await this.request("api/users/authenticate", data, "post");
    return res.token;
  }

  /** Register user */

  static async registerUser(data) {
    const res = await this.request("api/users/register", data, "post");
    return res.token;
  }

  /** Get logged in user */

  static async getUserDetail(userId) {
    const res = await this.request(`api/users/${userId}`);
    return res.user;
  }


}


export default ByboApi;