<template>

    <div class="bookItemClass">
    <b-card
        :title="bookObject.title"
        :sub-title="bookObject.author"
    >
        <b-row>
                <b-img left thumbnail fluid width="150" :src="bookObject.img" alt="brakuje obrazka..." class="img-thumbnail bookimg"></b-img>
                <b-card-text>
                    {{ bookObject. lead }}
                </b-card-text>
        </b-row>

        <template v-slot:footer>
            <b-row>
                <b-col>
                     <em v-for="(tag,index) in bookObject.tags" :key="index">
                        <b-badge variant="success">{{ tag }}</b-badge>
                    </em>
                </b-col>
                <b-col class="text-right">
                    <router-link :to="`/book/${bookObject.id}/${bookObject.title}`">
                        <b-button variant="primary" >Wiecej</b-button>
                    </router-link>
                </b-col>
            </b-row>
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
