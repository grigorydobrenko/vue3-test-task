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
                description: 'Это создат болле привлекательный образ компании и позволит вашим сотрудникам убедиться что все идет как нужно.',
                checked: false
            },
            {
                id: 2,
                title: 'Создайте сотрудника',
                description: 'Это создат болле привлекательный образ компании и позволит вашим сотрудникам убедиться что все идет как нужно.',
                checked: true
            },
        ]
    }),
    getters: {

    },
    mutations: {
        toggleCheckbox(state, id) {
            state.forEach(post => post.id === id ? {...post, checked: !post.checked}: post)
        },

    }

}