<template>
  <div class="home">
    <v-card outlined>
        <v-card-title><h2>Home</h2></v-card-title>
    </v-card>
    <SquawkEditor/>
    <SquawkFeed v-if="finishedLoading" 
    :squawks="squawks" 
    :users="users" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src
import SquawkEditor from '@/components/SquawkEditor.vue';
// import Feed from '@/components/Feed.vue';
import SquawkFeed from '@/components/SquawkFeed.vue';
import convertArrayToObjectMixin from '@/mixins/convertArrayToObjectMixin';


@Component({
  components: {
    HelloWorld,
    SquawkEditor,
    // Feed,
    SquawkFeed
  },
  mounted() {
    const userName = 'User1'; //TODO: Remove hardcoded
    this.getData(userName);
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
        const squawkResponse = await Vue.axios.get(`http://localhost:56930/api/users/${userName}/friends/-/posts`);
        this.squawks = JSON.parse(JSON.stringify(this.convertArrayToObject(squawkResponse.data.value, "id")));

        const link = squawkResponse.data.links.find(link => link.rel === "users")
        const usersResponse = await Vue.axios.get(link.href);

        const curUserReponse = await Vue.axios.get(`http://localhost:56930/api/users/${userName}`);
        usersResponse.data.push(curUserReponse.data);

        this.users = JSON.parse(JSON.stringify(this.convertArrayToObject(usersResponse.data, "userName")));
      } 
      finally {
       this.finishedLoading = true;
      }
    },
  },
  mixins: [convertArrayToObjectMixin]
})
export default class Home extends Vue {}
</script>
