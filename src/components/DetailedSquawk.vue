<template>
  <div>
    <v-card class="d-flex" outlined
    :hover="!isMain" 
    :to="isMain ? undefined : `/users/${userData.userName}/squawks/${squawkData.id}`"
    >
      <v-card class="pa-2 flex-shrink-1" v-if="!isMain">
        <v-avatar rounded="circle" class="mt-3 ml-5">
          <v-img :src="userData.links.find(link => link.rel === 'image').href"></v-img>
        </v-avatar>
      </v-card>

      <v-card class="d-flex flex-column flex-grow-1">
        <v-card class="pa-2">

          <!-- Is Main Squawk -->
          <div v-if="isMain">
            <v-list two-line>
              <v-list-item :key="userData.userName">
                <div>
                  <v-list-item-avatar>
                    <v-img :src="userData.links.find(link => link.rel === 'image').href"></v-img>
                  </v-list-item-avatar>
                </div>

                <v-list-item-content>
                  <v-list-item-title>
                    <span class="font-weight-bold">{{ userData.fullName }} </span>
                  </v-list-item-title>
                  <v-list-item-subtitle>
                    <span class="blue-grey--text text--lighten-1">@{{ userData.userName }}</span>
                  </v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
            </v-list>
            <v-card-text class="pt-0 pb-0" v-if="replyToUser !== null">
                Replying to <router-link :to="`/users/${userData.userName}`">@{{replyToUser.userName}}</router-link>
            </v-card-text>
            <v-card-text class="text-h5 font-weight-medium">
              <span v-html="squawkData.text"></span>
            </v-card-text>
            <v-card-text class="body-1 blue-grey--text text--lighten-1">
              {{squawkData.createdAt | moment("h:mmA &middot; MMM DD, YYYY")}}
              <v-divider class="mt-2 mb-4"></v-divider>
              <span
                class="black--text font-weight-bold"
              >{{(squawkData.resquawkCount + squawkData.replyCount) | numFormat('0a')}}</span> Resquawks and comments
              <span
                class="black--text font-weight-bold ml-5"
              >{{squawkData.favoriteCount | numFormat('0a')}}</span> Likes
              <v-divider class="mt-4 mb-n4"></v-divider>
            </v-card-text>
            <SquawkActionBar
              :resquawk-count="squawkData.resquawkCount"
              :reply-count="squawkData.replyCount"
              :favorite-count="squawkData.favoriteCount"
            />
          </div>

          <!-- Is Sub Squawk -->
          <div v-else>
            <v-list one-line class="pt-0">
              <v-list-item :key="userData.userName">
                <v-list-item-content>
                  <v-list-item-title>
                    <span class="font-weight-bold">{{ userData.fullName }} </span>
                    <span
                      class="blue-grey--text text--lighten-1"
                    >@{{ userData.userName }} &middot; {{squawkData.createdAt | moment("MMM DD")}}</span>
                  </v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-list>
            <v-card-text class="mt-n9 pb-0 body-1">
              <span v-html="squawkData.text"></span>
            </v-card-text>
            <SquawkActionBar class="pt-0"
              :resquawk-count="squawkData.resquawkCount"
              :reply-count="squawkData.replyCount"
              :favorite-count="squawkData.favoriteCount"
              :side-spacers="false"
              :isSmall="true"
            />
          </div>
        </v-card>
      </v-card>
    </v-card>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import SquawkActionBar from "./SquawkActionBar";

export default Vue.extend({
  name: "DetailedSquawk",
  props: {
    squawkData: {
      type: Object,
      required: true,
    },
    userData: {
      type: Object,
      required: true,
    },
    currentSquawk: {
      type: Number,
      required: false,
    },
    replyToUser: Object
  },
  data: () => ({}),
  computed: {
    isMain: function () {
      return this.squawkData.id == this.currentSquawk;
    },
  },
  components: {
    SquawkActionBar,
  },
});
</script>

<style>
.line {
  border-left: 3px solid lightblue;
  height: 200px;
}
.remove-box-shadow{
    box-shadow: none !important;
}
</style>