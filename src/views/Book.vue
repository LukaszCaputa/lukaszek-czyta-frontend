<template>
  <div>

  <b-jumbotron :header="bookObject.title" :lead="bookObject.author">
    <p>{{ bookObject.notes }}</p>
  </b-jumbotron>

  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  data () {
    return {
      bookObject: {}
    }
  },
  computed: {
    ...mapState([
      'books'
    ])
  },
  mounted () {
    var bookElem
    for (bookElem in this.books) {
      if (parseInt(this.books[bookElem].id) === parseInt(this.$route.params.bookId)) { // FIXME
        this.bookObject = this.books[bookElem]
        break
      }
    }
    // TODO error handling in case no book was found
  }
}
</script>
