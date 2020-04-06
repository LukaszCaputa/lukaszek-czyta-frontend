export default {
  booksCount: (state) => {
    return state.booksDb.length
  },
  getAllBooks: (state) => {
    return state.booksDb.books
  }
}
