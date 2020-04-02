<template>
  <div class="home-view-container">

      <div v-for="item in getAllBooks" :key="item.id">
        <BookItem :bookObject=item />
      </div>

Books count: {{ booksCount }}
  </div>
</template>

<script>
import BookItem from '@/components/BookItem.vue'
import { mapGetters } from 'vuex'

export default {
  name: 'home',
  components: {
    BookItem
  },
  computed: {
    ...mapGetters([
      'booksCount',
      'getAllBooks'
    ])
  }
}
</script>
