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
    this.getData(this.currentSquawk);
  },
  data: () => ({
        finishedLoading: false,
        currentSquawk: 0,
        squawks: {},
        users: {},
        // squawks: {
        //   "2": {
        //     id: 2,
        //     createdAt: '2020-08-24T14:18:06.000Z',
        //     fullText: "this is a reply to Gus",
        //     InReplyToStatusId: 1,
        //     resquawkCount: 456,
        //     favoriteCount: 2345,
        //     replyCount: 8,
        //     userId: 12,
        //     link: "/users/HelloWorld/squawks/2"
        //   },
        //   "3": {
        //     id: 3,
        //     createdAt: '2020-08-24T14:18:06.000Z',
        //     fullText: "ANOTHER POST sdhrehwfgjerjkg lorem reply to Jane",
        //     InReplyToStatusId: 2,
        //     resquawkCount: 456,
        //     favoriteCount: 2345,
        //     replyCount: 8,
        //     userId: 13,
        //     link: "/users/SquawkerMan2020/squawks/3"
        //   },
        //   "1":{
        //     id: 1,
        //     createdAt: '2020-04-24T14:18:06.000Z',
        //     fullText: "This Is the Original Post made by Gus Swanson",
        //     InReplyToStatusId: null,
        //     resquawkCount: 14,
        //     favoriteCount: 42,
        //     replyCount: 0,
        //     userId: 11,
        //     link: "/users/GamerGuuy100/squawks/1"
        //   }
        // },
        // users: {
        //   "13":{
        //     accountName: "SquawkerMan2020",
        //     name: "Bill Dill",
        //     profileImage: `https://cdn.vuetifyjs.com/images/lists/${Math.floor((Math.random() * 5) + 1)}.jpg`,
        //     link: "/users/SquawkerMan2020"

        //   },
        //   "12":{
        //     accountName: "HelloWorld",
        //     name: "Jane Doe",
        //     profileImage: `https://cdn.vuetifyjs.com/images/lists/${Math.floor((Math.random() * 5) + 1)}.jpg`,
        //     link: "/users/HelloWorld"

        //   },
        //   "11":{
        //     accountName: "GamerGuuy100",
        //     name: "Gus Swanson",
        //     profileImage: `https://cdn.vuetifyjs.com/images/lists/${Math.floor((Math.random() * 5) + 1)}.jpg`,
        //     link: "/users/GamerGuuy100"

        //   }
        // }
  }),
  methods: {
    getData: function(userId){
      Vue.axios.get(`http://localhost:56930/api/users/${userId}/posts`)
      .then((response) => {
        this.squawks = JSON.parse(JSON.stringify(this.convertArrayToObject(response.data.value, "id")));
        const link = response.data.links.find(link => link.rel === "users")

        return Vue.axios.get(link.href);
      })
      .then((response) =>{
        this.users = JSON.parse(JSON.stringify(this.convertArrayToObject(response.data, "id")));
        this.finishedLoading = true;
      })
      .catch(() => {
          this.finishedLoading = true;

      });
    },
    convertArrayToObject: function(array, key) {
      return array.reduce((obj, item) => {
        return {
          ...obj,
          [item[key]]: item,
        };
      }, {});
    }
  }
})
export default class Squawks extends Vue {}
</script>
