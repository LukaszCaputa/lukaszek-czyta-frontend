<template>
  <b-card
    :title="bookObject.title"
    :sub-title="bookObject.author"
  >

      <b-row>
        <b-img center thumbnail fluid width="150" :src="bookObject.img" alt="brakuje obrazka..." ></b-img>
      </b-row>

      <b-row>
        <b-col cols="2" class="text-muted">Lead</b-col>
        <b-col>{{ bookObject.lead }}</b-col>
      </b-row>

      <b-row>
        <b-col cols="2" class="text-muted">Polecam ?</b-col>
        <b-col>
          <div v-if="bookObject.recommendation === 0">
            <v-icon name="thermometer-empty" id="tooltip-target-empty"></v-icon>
            <b-tooltip target="tooltip-target-empty" triggers="hover">
              Nie polecam ...
            </b-tooltip>
          </div>
          <div v-else-if="bookObject.recommendation === 1">
            <v-icon name="thermometer-half" id="tooltip-target-half"></v-icon>
            <b-tooltip target="tooltip-target-half" triggers="hover">
              Ciekawa pozycja, ale mozna zyc i bez niej :)
            </b-tooltip>
          </div>
          <div v-else-if="bookObject.recommendation === 2">
            <v-icon name="thermometer-full" id="tooltip-target-full"></v-icon>
            <b-tooltip target="tooltip-target-full" triggers="hover">
              Ksiazka naprawde bardzo warta uwagi !
            </b-tooltip>
          </div>
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

      <template v-slot:footer>
        <b-row >
          <b-col class="text-right">
            <router-link :to="`/`">
              <b-button  variant="primary">Back</b-button>
            </router-link>
          </b-col>
        </b-row>
      </template>

    </b-card>
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
