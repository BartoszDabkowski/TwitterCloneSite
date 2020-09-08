<template>
<div>
    <DetailedSquawk v-for="squawk in squawks" :key="squawk.Id"
    :squawk-data="squawk" 
    :user-data="users[squawk.userName]"
    :current-squawk="currentSquawk"
    :reply-to-user="null" />
</div>
</template>

<script lang="ts">
import Vue from "vue";
import DetailedSquawk from './DetailedSquawk.vue';

export default Vue.extend({
  name: "SquawkFeed",
  props: {
    squawks: {
      type: Object,
      required: true,
    },
    users: {
      type: Object,
      required: true,
    },
    currentSquawk: {
      type: Number,
      required: false,
    }
  },
  mounted() {
    //   Object.keys(this.squawks).forEach(e => console.log(this.squawks[e]));
  },
  data: () => ({}),
  computed: {},
  components: {
      DetailedSquawk
  },
});
</script>

<style>
</style>
