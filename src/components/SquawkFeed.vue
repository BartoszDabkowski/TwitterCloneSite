<template>
<div>
    <DetailedSquawk v-for="squawk in squawks" :key="squawk.Id"
    :squawk-data="squawk" 
    :user-data="users[squawk.userId]"
    :current-squawk="currentSquawk"
    :reply-to-user="squawk.inReplyToPostId !== null ? users[squawks[squawk.inReplyToPostId].userId]: null" />
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
      required: true,
    }
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
