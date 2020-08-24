<template>
  <div class="home">
    <v-card outlined>
        <v-card-title><h2>Home</h2></v-card-title>
    </v-card>
    <SquawkEditor/>
    <Feed/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src
import SquawkEditor from '@/components/SquawkEditor.vue';
import Feed from '@/components/Feed.vue';

@Component({
  components: {
    HelloWorld,
    SquawkEditor,
    Feed
  },
})
export default class Home extends Vue {}
</script>
