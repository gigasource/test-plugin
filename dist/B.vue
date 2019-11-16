<template>
	<v-layout row="" wrap="">
		<v-flex xs6="">
			<slot>
				<cms-add>
			</cms-add></slot>
		</v-flex>
		<v-flex xs6="">
			<slot name="right">
				<cms-add name="right">
			</cms-add></slot>
		</v-flex>
	</v-layout>
</template>
<script>
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _default = {
  name: '',

  data() {
    return {
      text: 'test'
    };
  },

  mounted() {
    console.log(this.obj);
  },

  //inject: ['testSingletonObj'],
  injectService: ['TestSingleton:obj']
};
exports.default = _default;
</script> 
<style scoped>

</style>
