<template>
    <div>
        <v-btn @click="renderPivotTable" small="" depressed="">render pivot table</v-btn>
        <pivot-table :data="items" :row-fields="rows" :col-fields="cols" :reducer="reducer">
            <template v-slot:value="{ value }">
                <span class="center">{{ value }}</span>
            </template>
        </pivot-table>
    </div>
</template>
<script>
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var jsonFn = _interopRequireWildcard(require("json-fn"));

var _cms = _interopRequireDefault(require("cms"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

var _default = {
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
    };
  },

  methods: {
    async renderPivotTable() {
      const q = jsonFn.clone(this.model, true, true);
      const Model = _cms.default.models[q.collections];
      const query = {};
      let items = await Model.find(query);
      this.items = items;
      const pivot = q.query.find(q => q.choice === 'pivottable'); //const sumFn = _.find(pivot.reducers, { label: 'sum' }).fn;

      console.log(pivot);
      this.reducer = pivot.reducers[0].fn;
      this.rows = pivot.rows.map(r => {
        return {
          label: r.label,
          getter: r.fn
        };
      });
      this.cols = pivot.columns.map(r => {
        return {
          label: r.label,
          getter: r.fn
        };
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

};
exports.default = _default;
</script> 
<style scoped>

</style>
