<template>
  <div class="home-view-container">
    Home view ...<br>

      <div v-for="item in getAllBooks" :key="item.id">
        <BookItem :title=item.title :author=item.author :bookId=item.id />
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
