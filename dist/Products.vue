<template>
	<div>
    <v-btn small="" depressed="" v-for="(product, index) in productsInCategory" :key="index" @click="pushItem(product)">
     {{product.name}}
    </v-btn>
	</div>
</template>
<script>
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _default = {
  name: "Product",
  props: ['model'],

  data() {
    return {
      products: []
    };
  },

  computed: {
    productsInCategory() {
      if (!this.category) return [];
      return this.products.filter(p => p.category && p.category.name === this.category.name);
    }

  },

  mounted() {
    this.products.push(...cms.getList('Product'));
  },

  injectService: ['OrderList:pushItem', 'Category:category'],
  methods: {}
};
exports.default = _default;
</script> 
<style scoped>
</style>
