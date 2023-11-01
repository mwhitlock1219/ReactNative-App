// The purpose of this file is to separate the logic of calling the api endpoints from the Screens

const BASE_URL = "https://api2.shop.com/AffiliatePublisherNetwork/v2";

// the api key is hidden away in the .env file for privacy
const apiKey = process.env.API_KEY;

//api call to '/categories' endpoint
//this call still needs to be modified to take required query params ()
//this call only fetches categories from the 'en_US' locale with publisherId 'TEST'
export const fetchCategories = async () => {
    const url = `${BASE_URL}/categories?publisherId=TEST&locale=en_US&api_key=${apiKey}`;
    try {
      let response = await fetch(url);
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return await response.json();
    } catch (error) {
      throw error;
    }
};


//api call to '/products' endpoint
//this call still needs to be modified to take required query params ()
//this call only fetches products from the 'en_US' locale with publisherId 'TEST' and returns by default the first 15
export const fetchAllProducts = async () => {
    const url = `${BASE_URL}/products?publisherId=TEST&locale=en_US&api_key=${apiKey}`;
    try {
      let response = await fetch(url);
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return await response.json();
    } catch (error) {
      throw error;
    }
};
  