<template>
  <v-card class="mx-auto" outlined>
    <v-list three-line>
      <div v-for="item in items" :key="item.id">
          <Squawk :squawk-data="item"  />
      </div>
    </v-list>
  </v-card>
</template>

<script lang="ts">
import Vue from "vue";
import Squawk from './Squawk';

export default Vue.extend({
  name: "Feed",
  data: () => ({
      items: [
        {
          id: 1,
          avatar: `https://cdn.vuetifyjs.com/images/lists/${Math.floor((Math.random() * 5) + 1)}.jpg`,
          userName: 'John Doe',
          accountName: 'helloWorld12',
          posted: '2020-08-24T14:18:06.000Z',
          subtitle: "Ali Connors &mdash; I'll be in your neighborhood doing errands this weekend. Do you want to hang out?",
          link: "/users/helloWorld12/squawks/1",
          squawkInteractions: {
            comments: 345,
            resquawks: 6,
            likes: 787
          }
        },
                {
          id: 2,
          avatar: `https://cdn.vuetifyjs.com/images/lists/${Math.floor((Math.random() * 5) + 1)}.jpg`,
          userName: 'Jacob Johnson',
          accountName: 'Whatsupp23',
          posted: '2020-07-24T14:18:06.000Z',
          subtitle: "Intersting point!",
          link: "/users/Whatsupp23/squawks/2",
          squawkInteractions: {
            comments: 145,
            resquawks: 56,
            likes: 26787
          }
          
        }
      ]
  }),
  computed: {},
  components: {
      Squawk
  },
});
</script>
