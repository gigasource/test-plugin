<template>
	<div>
		<p>Name: {{model.name}}</p>
    <p>Phone: {{model.phone}}</p>
    <p>Address: {{model.address}}</p>
	</div>
</template>

<script>
  export default {
    name: "Person",
		props: ['model', 'text'],
    methods: {
      onClick() {

      }
    }
  }
</script>

<style scoped>
  .red-1 {
    color: red
  }
</style>