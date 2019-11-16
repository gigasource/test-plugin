<template>
    <v-container v-bind="{ [`grid-list-${size}`]: true }" fluid="">
        <v-layout row="" wrap="">
            <v-flex v-for="n in 9" :key="n" xs4="">
                <v-card flat="" tile="">
                    <v-img :src="`https://unsplash.it/150/300?image=${Math.floor(Math.random() * 100) + 1}`" height="150px"></v-img>
                </v-card>
            </v-flex>
        </v-layout>
    </v-container>
</template>
<script>
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _default = {
  name: "GGrid",
  props: {
    size: {
      type: String,
      default: 'xs'
    }
  },

  mounted() {}

};
exports.default = _default;
</script> 
<style scoped>

</style>
