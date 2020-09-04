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
                <span class="blue-grey--text text--lighten-1">&middot; {{ squawkData.posted | moment("from", "now")}}</span>
            </v-list-item-title>
            <v-list-item-subtitle class="text--primary" v-html="squawkData.subtitle"></v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
    </v-list>
      <SquawkActionBar :squawkInteractions="squawkData.squawkInteractions" />
  </v-card>
</template>

<script lang="ts">
import Vue from "vue";
import SquawkActionBar from './SquawkActionBar';

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
  components: {
    SquawkActionBar
  },
});
</script>

<style>
</style>
