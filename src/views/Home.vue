<template>
  <div class="home-view-container">
    Home view ... {{ booksCount }}

    <BookItem title="Jak to zrobic?" author="Ignacy" bookId="123"/>

    <BookItem title="Sturm" author="Van der Wellen" bookId="123"/>

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
