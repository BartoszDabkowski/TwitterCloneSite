<template>
  <v-app id="inspire" v-bind:class="{'style-on': toggleGrid}">
    <NavDrawer/>
    <v-main>
      <v-container fluid>
        <v-row>
          <v-col>
            <router-view></router-view>
          </v-col>
          <v-col>

          </v-col>
        </v-row>
      </v-container>
    </v-main>
    <v-footer
      color="indigo"
      app
    >
    <v-row>
      <v-col align="end" class="pa-0">
        <v-btn  color="error" x-small @click="toggleGrid = !toggleGrid">Toggle Grid</v-btn>
      </v-col >
    </v-row>
    </v-footer>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue';
//import HelloWorld from './components/HelloWorld.vue';
import NavDrawer from './components/NavDrawer.vue';


export default Vue.extend({
  name: 'App',

  components: {
    NavDrawer,
  },
props: {
      source: String,
    },
  data: () => ({
    drawer: null,
    toggleGrid: false
  }),
});
</script>

<style>
.style-on div[class^='col'], .style-on div[class*='col']{
    border: .25px solid red;
}
.style-on .row {
  border: .25px solid blue;
}
.container{
  border: .5px solid rgb(219, 234, 240);
}
</style>