<template>
  <div>
    <h1>{{ $route.params.bookId }}</h1>
    <h2>{{ book.author }}</h2>
    <h3>detail view</h3>

  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  data () {
    return {
      booksDb: {}
    }
  },
  computed: {
    ...mapState([
      'books'
    ])
  },
  mounted () {
    // const animal = this[this.$route.params.id]
    this.book = { author: 'jurek' }
  }
}
</script>
