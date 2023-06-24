import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { v4 as uuid } from 'uuid';
import ApiBooks from '../ApiBooks';

export const fetchBooks = createAsyncThunk('books/fetchBooks', async () => {
  const response = await ApiBooks.get('/books');
  return response.data;
});

export const addBook = createAsyncThunk(
  'books/createBook',
  async (bookData) => {
    const response = await ApiBooks.post('/books', bookData);
    if (response.data === 'Created') {
      // Book create successfuly
    }
  },
);

export const deleteBook = createAsyncThunk('books/deleteBook', async (id) => {
  await ApiBooks.delete(`/books/${id}`);
  return id;
});

const bookSlice = createSlice({
  name: 'books',
  initialState: {
    books: [],
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchBooks.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchBooks.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.books = Object.entries(action.payload).map(
          ([itemId, itemData]) => ({
            item_id: itemId,
            ...itemData[0],
          }),
        );
      })
      .addCase(fetchBooks.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(addBook.fulfilled, (state, action) => {
        state.status = 'succeeded';
        const book = {
          item_id: uuid(),
          ...action.meta.arg,
        };
        state.books = [...state.books, book];
      })
      .addCase(deleteBook.fulfilled, (state, action) => {
        state.books = state.books.filter(
          (book) => book.item_id !== action.payload,
        );
      });
  },
});

export default bookSlice.reducer;
