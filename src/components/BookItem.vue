<template>

    <div class="bookItemClass">
    <b-card
        :title="bookObject.title"
        :sub-title="bookObject.author"
    >
        <div class="row">
                <b-img left thumbnail fluid width="150" :src="bookObject.img" alt="brakuje obrazka..." class="img-thumbnail bookimg"></b-img>
                <b-card-text>
                    {{ bookObject. lead }}
                </b-card-text>
        </div>

        <template v-slot:footer>
            <div class="row">
                <div class="col-md-6">
                     <em v-for="(tag,index) in bookObject.tags" :key="index">
                        <b-badge variant="success">{{ tag }}</b-badge>
                    </em>
                </div>
                <div class="col-md-6 text-right">
                    <router-link :to="`/book/${bookObject.id}/${bookObject.title}`">
                        <b-button variant="primary" >Wiecej</b-button>
                    </router-link>
                </div>
            </div>
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
