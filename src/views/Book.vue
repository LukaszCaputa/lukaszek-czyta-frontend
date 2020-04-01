<template>
  <div>

    <h3>detail view - {{ $route.params.bookId }}</h3>

  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  computed: {
    ...mapState([
      'books'
    ])
  }
}
</script>
