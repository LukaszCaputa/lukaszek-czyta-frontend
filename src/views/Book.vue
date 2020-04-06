<template>
  <b-container class="bookFullPage">
    <b-row>
      <b-col>
        <h1>{{ bookObject.title }}</h1>
        <h4>{{ bookObject.author }}</h4>
      </b-col>
    </b-row>

      <b-row>
        <b-col cols="2" class="text-muted">Lead</b-col>
        <b-col>{{ bookObject.lead }}</b-col>
      </b-row>

      <b-row>
        <b-col cols="2" class="text-muted">Polecam ?</b-col>
        <b-col>
          <div v-if="bookObject.recommendation === 0"> <v-icon name="thermometer-empty" ></v-icon> </div>
          <div v-if="bookObject.recommendation === 1"> <v-icon name="thermometer-half" ></v-icon> </div>
          <div v-if="bookObject.recommendation === 2"> <v-icon name="thermometer-full" ></v-icon> </div>
        </b-col>
      </b-row>

      <b-row>
        <b-col cols="2" class="text-muted">Data przeczytania</b-col>
        <b-col>{{ bookObject.readDate }}</b-col>
      </b-row>

      <b-row>
        <b-col cols="2" class="text-muted">Tagi</b-col>
        <b-col>
          <em v-for="(tag,index) in bookObject.tags" :key="index">
            <b-badge variant="success">{{ tag }}</b-badge>
          </em>
        </b-col>
      </b-row>

      <b-row>
        <b-col cols="2" class="text-muted">Notatki</b-col>
        <b-col>{{ bookObject.notes }}</b-col>
      </b-row>

      <b-row >
        <b-col class="text-right">
          <router-link :to="`/`">
            <b-button  variant="primary">Back</b-button>
          </router-link>
        </b-col>
      </b-row>

    </b-container>
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
      'booksDb'
    ])
  },
  mounted () {
    var bookElem
    for (bookElem in this.booksDb.books) {
      if (parseInt(this.booksDb.books[bookElem].id) === parseInt(this.$route.params.bookId)) { // FIXME
        this.bookObject = this.booksDb.books[bookElem]
        break
      }
    }
    // TODO error handling in case no book was found
  }
}
</script>
