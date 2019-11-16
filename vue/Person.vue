<template>
	<div>
		<p>Name: {{model.name}}</p>
    <p class="red-1">Phone: {{model.phone}}</p>
	</div>
</template>

<script>
  export default {
    name: "Person",
		props: ['model']
  }
</script>

<style scoped>
  .red-1 {
    color: red
  }
</style>