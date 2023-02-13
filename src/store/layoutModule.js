export const layoutModule = {
    state: () => ({
        headerItems: [
            {id: 1, logo: 'reports', description: 'Отчетов сформировано', count: 10600},
            {id: 2, logo: 'employees', description: 'Численность работников', count: 13783},
            {id: 3, logo: 'groups', description: 'Количество групп', count: 737},
        ],
        mainItems: [
            {
                id: 1,
                title: 'Заполните информацию о компании',
                description: 'Это создат болле привлекательный образ компании и позволит вашим сотрудникам убедиться что все идет как нужно.'
                // checked: false
            },
            {
                id: 2,
                title: 'Создайте сотрудника',
                description: 'Это создат болле привлекательный образ компании и позволит вашим сотрудникам убедиться что все идет как нужно.',
                // checked: true
            },
        ]
    }),
    getters: {
        // sortedPosts(state) {
        //     return [...state.posts].sort((post1, post2) => post1[state.selectedSort]?.localeCompare(post2[state.selectedSort]))
        // },
        // sortedAndSearchedPosts(state, getters) {
        //     return getters.sortedPosts.filter(post => post.title.toLowerCase().includes(state.searchQuery.toLowerCase()))
        // }
    },
    mutations: {
        // setPosts(state, posts) {
        //     state.posts = posts;
        // },
        // setLoading(state, bool) {
        //     state.isPostsLoading = bool
        // },
        // setPage(state, page) {
        //     state.page = page
        // },
        // setSelectedSort(state, selectedSort) {
        //     state.selectedSort = selectedSort
        // },
        // setTotalPages(state, totalPages) {
        //     state.totalPages = totalPages
        // },
        // setSearchQuery(state, searchQuery) {
        //     state.searchQuery = searchQuery
        // },
    },
    actions: {
        //     async fetchPosts({state, commit}) {
        //         try {
        //             commit('setLoading', true);
        //             const response = await axios.get('https://jsonplaceholder.typicode.com/posts', {
        //                 params: {
        //                     _page: state.page,
        //                     _limit: state.limit
        //                 }
        //             });
        //             commit('setTotalPages', Math.ceil(response.headers['x-total-count'] / state.limit))
        //             commit('setPosts', response.data)
        //         } catch (e) {
        //             console.log(e)
        //         } finally {
        //             commit('setLoading', false);
        //         }
        //     },
        //     async loadMorePosts({state, commit}) {
        //         try {
        //             commit('setPage', state.page + 1)
        //             const response = await axios.get('https://jsonplaceholder.typicode.com/posts', {
        //                 params: {
        //                     _page: state.page,
        //                     _limit: state.limit
        //                 }
        //             });
        //             commit('setTotalPages', Math.ceil(response.headers['x-total-count'] / state.limit))
        //             commit('setPosts', [...state.posts, ...response.data]);
        //         } catch (e) {
        //             console.log(e)
        //         }
        //     }
        // },
        // namespaced: true
    }
}