<template>
  <div class="Squawks">
    <v-card outlined>
        <v-card-title>
          <span class="mr-5" >
          <v-btn icon color="info" to="/">
        <v-icon>mdi-arrow-left</v-icon>
      </v-btn>
      </span>
      <h2>Squawk</h2></v-card-title>
    </v-card>
    <SquawkFeed v-if="finishedLoading" :squawks="squawks" :users="users" :current-squawk="currentSquawk"/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import DetailedSquawk from '@/components/DetailedSquawk.vue';
import SquawkFeed from '@/components/SquawkFeed.vue';
import convertArrayToObjectMixin from '@/mixins/convertArrayToObjectMixin';

@Component({
  components: {
    DetailedSquawk,
    SquawkFeed
  },
  computed: {
  },
  watch: {
    $route(to, from){
      this.currentSquawk = Number(to.params.squawkId);
    }
  },
  mounted() {
    this.currentSquawk = Number(this.$route.params.squawkId);
    const userName = this.$route.params.userName;
    this.getData(userName, this.currentSquawk);
  },
  data: () => ({
        finishedLoading: false,
        currentSquawk: 0,
        squawks: {},
        users: {},
  }),
  methods: {
    getData: async function(userName, squawkId){
      try{
        const squawkResponse = await Vue.axios.get(`http://localhost:56930/api/users/${userName}/posts/${squawkId}`);
        this.squawks = JSON.parse(JSON.stringify(this.convertArrayToObject(squawkResponse.data.value, "id")));

        const link = squawkResponse.data.links.find(link => link.rel === "users")
        const userResponse = await Vue.axios.get(link.href);
        this.users = JSON.parse(JSON.stringify(this.convertArrayToObject(userResponse.data, "userName")));
      } 
      finally {
       this.finishedLoading = true;
      }
    },
  },
  mixins: [convertArrayToObjectMixin]
})
export default class Squawks extends Vue {}
</script>
