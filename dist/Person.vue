<template>
	<div>
		<p>Name: {{model.name}}</p>
    <p class="red-1">Phone: {{model.phone}}</p>
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
  props: ['model']
};
exports.default = _default;
</script> 
<style scoped>
  .red-1 {
    color: red
  }
</style>
