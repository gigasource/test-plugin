<template>
	<fragment>
</fragment></template>
<script>
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _default = {
  name: 'TestSingleton',
  props: {},
  data: function () {
    return {
      obj: {
        a: 3,
        b: 5
      }
    };
  },
  domain: 'TestSingleton',
  computed: {},
  methods: {},

  mounted() {},

  provide() {
    return {
      obj: this.obj
    };
  }

};
exports.default = _default;
</script> 
<style scoped>

</style>
