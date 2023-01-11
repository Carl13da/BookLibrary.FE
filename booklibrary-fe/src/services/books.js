import axios from 'axios';

export const getBooks = async () => {
  const books = await axios.get('https://localhost:3000/books');

  return books;
};
