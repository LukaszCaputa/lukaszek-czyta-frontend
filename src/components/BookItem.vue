<template>
  <div class="bookItem">
    <h1>{{ title }}</h1>
    <h2>{{ author }}</h2>
    <h3>test</h3>

        <router-link :to="`/book/${bookId}`">
          Wiecej
        </router-link>

  </div>
</template>

<script>
export default {
  props: {
    title: String,
    author: String,
    bookId: String
  }
}
</script>

<style scoped>
    .bookItem {
        offset: 25px;
        background-color: grey;
    }
</style>
