<template>
  <div>

  <b-jumbotron :header="bookObject.title" :lead="bookObject.author">
    <b-container class="bv-example-row">
      <b-row>
        <b-col cols="2">Lead</b-col>
        <b-col>{{ bookObject.lead }}</b-col>
      </b-row>

      <b-row>
        <b-col cols="2">Polecam ?</b-col>
        <b-col>{{ bookObject.recommendation }}</b-col>
      </b-row>

      <b-row>
        <b-col cols="2">Data przeczytania</b-col>
        <b-col>{{ bookObject.readDate }}</b-col>
      </b-row>

      <b-row>
        <b-col cols="2">Tagi</b-col>
        <b-col>
          <em v-for="(tag,index) in bookObject.tags" :key="index">
            <b-badge variant="success">{{ tag }}</b-badge>
          </em>
        </b-col>
      </b-row>

      <b-row>
        <b-col cols="2">Notatki</b-col>
        <b-col>{{ bookObject.notes }}</b-col>
      </b-row>

    </b-container>
  </b-jumbotron>
  <router-link :to="`/`">
          <b-button  variant="primary">Back</b-button>
        </router-link>
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
