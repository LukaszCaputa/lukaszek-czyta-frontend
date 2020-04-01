<template>

    <div>
    <b-card
        :title="title"
        :sub-title="author"
    >
        <b-card-text>
        Lorem ipsum
        </b-card-text>

        <router-link :to="`/book/${bookId}`">
          <b-button  variant="primary">Wiecej</b-button>
        </router-link>

    </b-card>
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
</style>
