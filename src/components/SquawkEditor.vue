<template>
  <v-card class="mx-auto" outlined>
    <v-list-item three-line>
      <v-list-item-avatar tile size="80">
        <v-avatar size="80">
          <v-img src="https://randomuser.me/api/portraits/men/83.jpg"></v-img>
        </v-avatar>
      </v-list-item-avatar>
      <v-list-item-content>
        <v-list-item-content>
          <v-textarea v-model="value" placeholder="What's happending?" auto-grow rows="1"></v-textarea>
        </v-list-item-content>
      </v-list-item-content>
    </v-list-item>

    <v-card-actions align="end">
      <v-btn icon color="primary">
        <v-icon>mdi-image</v-icon>
      </v-btn>
      <v-btn icon color="primary">
        <v-icon>mdi-gif</v-icon>
      </v-btn>
      <v-btn icon color="primary">
        <v-icon>mdi-poll</v-icon>
      </v-btn>
      <v-btn icon color="primary">
        <v-icon>mdi-emoticon-outline</v-icon>
      </v-btn>
      <v-btn icon color="primary">
        <v-icon>mdi-clock-outline</v-icon>
      </v-btn>
      <v-spacer></v-spacer>
      <span v-show="value.length > 0">      
        <ProgressCircle :text="value" :max-char-length="maxCharLength" />
        <span class="pl-1 pr-1"> | </span>
      </span>
      <v-btn :disabled="value.length == 0" color="primary">Squawk</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script lang="ts">
import Vue from "vue";
import ProgressCircle from "./ProgressCircle.vue";

export default Vue.extend({
  name: "SquawkEditor",
  data: () => ({
    value: "",
    maxCharLength: 280,
  }),
  computed: {},
  components: {
    ProgressCircle,
  },
});
</script>
