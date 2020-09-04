<template>
  <v-card-actions align="end">
      <v-spacer v-if="sideSpacers"></v-spacer>
      <v-btn icon color="blue-grey lighten-1">
        <v-icon :small="isSmall">mdi-comment-outline</v-icon>
      </v-btn> {{ replyCount | numFormat('0a') }}
      <v-spacer></v-spacer>
            <v-btn icon color="blue-grey lighten-1">
        <v-icon :small="isSmall">mdi-twitter-retweet</v-icon>
      </v-btn> {{ resquawkCount | numFormat('0a') }}
      <v-spacer></v-spacer>
            <v-btn icon color="blue-grey lighten-1">
        <v-icon :small="isSmall">mdi-heart-outline</v-icon>
      </v-btn>{{ favoriteCount | numFormat('0a') }}
      <v-spacer></v-spacer>
            <v-btn icon color="blue-grey lighten-1">
        <v-icon :small="isSmall">mdi-arrow-up</v-icon>
      </v-btn>
      <v-spacer v-if="sideSpacers"></v-spacer>
  </v-card-actions>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "SquawkActionBar",
  props:{
      resquawkCount: Number,
      replyCount: Number,
      favoriteCount: Number,
      sideSpacers: {
          type: Boolean,
          default: true
      },
      isSmall: Boolean
  },
  data: () => ({
      
  }),
  computed: {},
  components: {
  },
});
</script>
