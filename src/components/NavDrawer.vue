<template class="mr-4">
  <v-navigation-drawer
    floating
    v-model="drawer"
    :color="color"
    :expand-on-hover="expandOnHover"
    :mini-variant="miniVariant"
    :right="right"
    :permanent="permanent"
    :src="bg"
    app
    absolute
    dark
  >
    <v-list dense nav class="py-0">
      <v-list-item two-line :class="miniVariant && 'px-0'">
        <v-list-item-avatar>
          <img src="https://randomuser.me/api/portraits/men/81.jpg" />
        </v-list-item-avatar>

        <v-list-item-content>
          <v-list-item-title>Application</v-list-item-title>
          <v-list-item-subtitle>Subtext</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list-item v-for="item in items" :key="item.title" link :to="item.route">
        <v-list-item-icon>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script lang="ts">
  import Vue from 'vue'

  export default Vue.extend({
    name: 'NavDrawer',
    data: () => ({
      drawer: true,
        items: [
          { title: 'Home', icon: 'mdi-home', route: '/' },
          { title: 'Explore', icon: 'mdi-pound', route: '/Explore' },
          { title: 'Messages', icon: 'mdi-email', route: '/Messages' },
          { title: 'Profile', icon: 'mdi-account', route: '/Profile' },
        ],
        color: 'primary',
        colors: [
          'primary',
          'blue',
          'success',
          'red',
          'teal',
        ],
        right: false,
        permanent: true,
        expandOnHover: false,
        background: false,
    }),
    computed: {
      miniVariant() {
        return this.$vuetify.breakpoint.mdAndDown;
      },
      bg () {
        return this.background ? 'https://cdn.vuetifyjs.com/images/backgrounds/bg-2.jpg' : undefined
      },
    },
  })
</script>
