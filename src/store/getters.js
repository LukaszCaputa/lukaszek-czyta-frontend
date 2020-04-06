export default {
  booksCount: (state) => {
    return state.booksDb.books.length
  },
  getAllBooks: (state) => {
    return state.booksDb.books
  }
}
