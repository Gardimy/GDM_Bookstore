import axios from 'axios';

const ApiBooks = axios.create({ baseURL: 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/QcQ0JaTg9yveqIx15u2O/' });

export default ApiBooks;
