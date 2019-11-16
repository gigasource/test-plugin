<template>
	<div>
		<div>
			<span>
				Query ({{items && items.length}})
			</span>
			<v-btn small depressed>render pivot table</v-btn>
		</div>
		<div>
			<pivot-table
					:data="items"
					:row-fields="rows"
					:col-fields="cols"
					:reducer="reducer"
			>
				<template slot="value" slot-scope="{ value }">
					<span class="center">{{ value }}</span>
				</template>
			</pivot-table>
		</div>

	</div>
</template>

<script>
  export default {
    name: 'Query',
    props: ['model'],
    data() {
      return {
        items: [],
        rows: [{
          getter: item => item.user && item.user[0].name,
          //label: 'User'
        }],
        cols: [{
          getter: item => item.table,
          label: 'Table'
        }],
        reducer: (sum, item) => {
          return sum + item.vSum;
        },
      }
    },
    async mounted() {
      //const q = await cms.models.Query.findOne({}).lean();
      const q = this.model;
      const Model = cms.models[q.collections];
      const query = {};
      this.items = await Model.find(query);
    }
  }
</script>

<style scoped>

</style>