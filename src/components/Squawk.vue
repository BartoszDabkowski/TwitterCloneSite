<template>
  <v-card class="mx-auto" outlined hover :to="squawkData.link">
    <v-list three-line>
        <v-list-item :key="squawkData.title">
          <v-list-item-avatar>
            <v-img :src="squawkData.avatar"></v-img>
          </v-list-item-avatar>

          <v-list-item-content>
            <v-list-item-title>
                <span class="font-weight-bold">{{ squawkData.userName }} </span> 
                <span class="blue-grey--text text--lighten-1">@{{ squawkData.accountName }} </span>
                <span class="blue-grey--text text--lighten-1">| {{ squawkData.posted | moment("from", "now")}}</span>
            </v-list-item-title>
            <v-list-item-subtitle class="text--primary" v-html="squawkData.subtitle"></v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
    </v-list>
    <v-card-actions align="end">
        <v-spacer></v-spacer>
      <v-btn icon color="blue-grey lighten-1">
        <v-icon>mdi-comment-outline</v-icon>
      </v-btn>
      <v-spacer></v-spacer>
            <v-btn icon color="blue-grey lighten-1">
        <v-icon>mdi-twitter-retweet</v-icon>
      </v-btn>
      <v-spacer></v-spacer>
            <v-btn icon color="blue-grey lighten-1">
        <v-icon>mdi-heart-outline</v-icon>
      </v-btn>
      <v-spacer></v-spacer>
            <v-btn icon color="blue-grey lighten-1">
        <v-icon>mdi-upload-outline</v-icon>
      </v-btn>
      <v-spacer></v-spacer>
    </v-card-actions>
  </v-card>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "Squawk",
  props:{
      squawkData: {
          type: Object,
          required: true
      }
  },
  data: () => ({ 
  }),
  computed: {},
  components: {},
});
</script>

<style>
</style>
