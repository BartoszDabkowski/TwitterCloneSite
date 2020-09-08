<template>
  <v-card class="mx-auto" outlined hover :to="`/users/${user.userName}/squawks/${squawk.id}`">
    <v-list three-line>
        <v-list-item :key="squawk.title">
          <v-list-item-avatar>
            <v-img :src="user.links.find(link => link.rel === 'image').href"></v-img>
          </v-list-item-avatar>

          <v-list-item-content>
            <v-list-item-title>
                <span class="font-weight-bold">{{ squawk.fullName }} </span> 
                <span class="blue-grey--text text--lighten-1">@{{ user.userName }} </span>
                <span class="blue-grey--text text--lighten-1">&middot; {{ squawk.createdAt | moment("from", "now")}}</span>
            </v-list-item-title>
            <v-list-item-subtitle class="text--primary" v-html="squawk.text"></v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
    </v-list>
      <SquawkActionBar               
        :resquawk-count="squawk.resquawkCount"
        :reply-count="squawk.replyCount"
        :favorite-count="squawk.favoriteCount" />
  </v-card>
</template>

<script lang="ts">
import Vue from "vue";
import SquawkActionBar from './SquawkActionBar';

export default Vue.extend({
  name: "Squawk",
  props:{
      squawk: {
          type: Object,
          required: true
      },
      user: {
          type: Object,
          required: true
      }
  },
  data: () => ({ 
  }),
  computed: {},
  components: {
    SquawkActionBar
  },
});
</script>

<style>
</style>
