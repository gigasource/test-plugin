<template>
    <div>
        <v-btn @click="renderPivotTable" small depressed>render pivot table</v-btn>
        <pivot-table
                :data="items"
                :row-fields="rows"
                :col-fields="cols"
                :reducer="reducer"
        >
            <template v-slot:value="{ value }">
                <span class="center">{{ value }}</span>
            </template>
        </pivot-table>
    </div>
</template>

<script>
    import * as jsonFn from 'json-fn';
    import cms from 'cms';

    export default {
        name: 'Query',
        props: ['model'],
        data() {
            return {
                items: [],
                reducers: [],
                rows: [{
                    getter: item => item.user && item.user[0].name,
                    label: 'User'
                }],
                cols: [],
                reducer: null
            }
        },
        methods: {
            async renderPivotTable() {

                const q = jsonFn.clone(this.model, true, true);
                const Model = cms.models[q.collections];
                const query = {};
                let items = await Model.find(query);

                this.items = items;
                const pivot = q.query.find(q => q.choice === 'pivottable');
                //const sumFn = _.find(pivot.reducers, { label: 'sum' }).fn;

                console.log(pivot);
                this.reducer = pivot.reducers[0].fn;
                this.rows = pivot.rows.map(r => {
                    return { label: r.label, getter: r.fn }
                });

                this.cols = pivot.columns.map(r => {
                    return { label: r.label, getter: r.fn }
                });
                /*const sumFnReducer = function (documents) {
                            return documents.reduce(sumFn, 0);
                        }
                        console.log(sumFnReducer(this.items));*/
            }
        },
        mounted() {
            this.renderPivotTable();
        }
    }
</script>

<style scoped>

</style>