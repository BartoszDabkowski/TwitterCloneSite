<template>
  <v-card class="mx-auto" outlined>
    <v-list three-line>
      <div v-for="squawk in squawks" :key="squawk.id">
        <Squawk v-if="finishedLoading" :squawk="squawk" :user="users[squawk.userName]" />
      </div>
    </v-list>
  </v-card>
</template>

<script lang="ts">
import Vue from "vue";
import Squawk from "./Squawk";
import convertArrayToObjectMixin from '@/mixins/convertArrayToObjectMixin';


export default Vue.extend({
  name: "Feed",
  data: () => ({
    squawks: {},
    users: {},
    finishedLoading: false,
  }),
  mounted() {
    this.getData();
  },
  methods: {
    getData: async function () {
      try {
        const squawkResponse = await Vue.axios.get(
          `http://localhost:56930/api/users/User1/friends/-/posts`
        );
        this.squawks = JSON.parse(
          JSON.stringify(
            this.convertArrayToObject(squawkResponse.data.value, "id")
          )
        );

        const link = squawkResponse.data.links.find(
          (link) => link.rel === "users"
        );
        const userResponse = await Vue.axios.get(link.href);
        this.users = JSON.parse(
          JSON.stringify(this.convertArrayToObject(userResponse.data, "userName"))
        );
      } finally {
        this.finishedLoading = true;
      }
    },
  },
      components: {
      Squawk,
    },
    mixins: [convertArrayToObjectMixin]
});
</script>
