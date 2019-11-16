<template>
	<div>
		<p>Name: {{model.name}}</p>
    <p>Phone: {{model.phone}}</p>
    <p>Address: {{model.address}}</p>
	</div>
</template>
<script>
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _default = {
  name: "Person",
  props: ['model', 'text'],
  methods: {
    onClick() {}

  }
};
exports.default = _default;
</script> 
<style scoped>
  .red-1 {
    color: red
  }
</style>
