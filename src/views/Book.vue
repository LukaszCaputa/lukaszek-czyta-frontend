<template>
  <div>

    <h3>detail view</h3>

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
