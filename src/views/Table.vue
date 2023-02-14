<template>
  <div class="container">
    <ag-grid-vue v-if="!isTableLoading"
                 style="width: 1000px; height: 200px"
                 class="ag-theme-alpine"
                 :columnDefs="columnDefs"
                 :rowData="table"
    >
    </ag-grid-vue>
    <div v-else>загрузка...</div>
  </div>
</template>

<script>
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import {AgGridVue} from "ag-grid-vue3";
import {mapActions, mapState} from 'vuex'

export default {
  name: "App",

  components: {
    AgGridVue,
  },

  data() {
    return {
      columnDefs: [
        {headerName: "Full name", field: "fullName", resizable: true},
        {headerName: "Status", field: "status"},
        {headerName: "Finished at", field: "finishedAt"},
        {headerName: "Report type", field: "reportType"},
      ],
    }
  },
  methods: {
    ...mapActions({
      fetchTable: 'table/fetchTable'
    }),
  },
  mounted() {
    this.fetchTable()
  },
  computed: {
    ...mapState({
      isTableLoading: state => state.table.isTableLoading,
      table: state => state.table.table,
    })
  }
};
</script>
