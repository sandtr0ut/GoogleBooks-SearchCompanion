import axios from 'axios';

export default {
  // Gets all book results from google search
  getGoogleSearchBooks: function(query) {
    return axios.get('https://www.googleapis.com/books/v1/volumes?q=' + query);
  },

  // Gets all saved books
  getBooks: function() {
    return axios.get('/api/books');
  },

  // Get book by id
  getBook: function(id) {
    return axios.get('/api/books/' + id);
  },

  // Saves a book to the database
  saveBook: function(savedBooks) {
    console.log('starting savebook with=' + savedBooks);
    return axios.post('/api/books', savedBooks);
  },

  // Delete book by id
  deleteBook: function(id) {
    return axios.delete('/api/books/' + id);
  }
};
