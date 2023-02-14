import axios from "axios";

export const tableModule = {
    state: () => ({
        table: [],
        isTableLoading: false,
    }),
    mutations: {
        setTable(state, table) {
            state.table = table.map(row => {
                if (row.questionnaire) {
                    return {
                        fullName: `${row.questionnaire?.first_name} ${row.questionnaire?.patronymic} ${row.questionnaire?.last_name}`,
                        status: `${row.status}`,
                        finishedAt: `${row.finished_at}`,
                        reportType: `${row.report_type}`
                    }
                } else {
                    return {
                        fullName: `No data...`,
                        status: `${row.status}`,
                        finishedAt: `${row.finished_at}`,
                        reportType: `${row.report_type}`
                    }
                }

            })
        },
        setLoading(state, bool) {
            state.isTableLoading = bool
        },
    },
    actions: {
        async fetchTable({commit}) {
            try {
                commit('setLoading', true);
                const response = await axios.get('https://ei-adult.way2wei.space/response.json')
                commit('setTable', response.data)
            } catch (e) {
                console.log(e)
            } finally {
                commit('setLoading', false);
            }
        },
    },
    namespaced: true
}
