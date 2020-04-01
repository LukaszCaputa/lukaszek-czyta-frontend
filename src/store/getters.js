export default {
  booksCount: (state) => {
    return state.books.length
  },
  getAllBooks: (state) => {
    return state.books
  }
}
