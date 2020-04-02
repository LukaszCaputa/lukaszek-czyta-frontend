<template>

    <div>
    <b-card
        :title="bookObject.title"
        :sub-title="bookObject.author"
    >
        <b-card-text>
        {{ bookObject. lead }}
        </b-card-text>

        <router-link :to="`/book/${bookObject.id}`">
          <b-button  variant="primary">Wiecej</b-button>
        </router-link>

        <template v-slot:footer>
            <em v-for="(tag,index) in bookObject.tags" :key="index">
                <b-badge variant="success">{{ tag }}</b-badge>
            </em>
        </template>

    </b-card>
    </div>

</template>

<script>
export default {
  props: {
    bookObject: Object
  }
}
</script>

<style scoped>
</style>
