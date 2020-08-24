<template>
    <v-progress-circular :size="size" :value="textLengthLimit" :color="color" :class="{'hide-circle': showProgressCircle}">
        <span v-if="showCharacterLeft">
            {{charactersLeft}}
        </span>
    </v-progress-circular>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "ProgressCircle",
  props:{
      text: {
          type: String,
          required: true
      },
      maxCharLength: {
          type: Number,
          required: true
      },
      size: {
          type: Number,
          default: 30
      }
  },
  data: () => ({
      value: "",
  }),
  watch:{

  },
  computed: {
      showCharacterLeft: function(){
          return this.charactersLeft < 10;
      },
      showProgressCircle: function(){
          return this.charactersLeft <= -10
      },
      charactersLeft: function(){
          return this.maxCharLength - this.text.length;
      },
      color: function() {
        let color = "primary";
        if(this.textLengthLimit > 100)
            color = "error";
        else if (this.textLengthLimit >= 90)
            color = "warning";

        return color;
      },
      textLengthLimit: function(){
          return this.text.length / this.maxCharLength * 100;
      },
      
  }
});
</script>


<style>
.hide-circle .v-progress-circular__underlay, 
.hide-circle .v-progress-circular__overlay {
    display: none;
}
</style>