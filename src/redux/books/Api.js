import axios from 'axios';

const API_BASE_URL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi';

const fetchBooksAPI = async (appId) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/apps/${appId}/books`);
    return response.data;
  } catch (error) {
    throw new Error('Failed to fetch books');
  }
};

export default fetchBooksAPI;
