

const initState = {
    listUser: [
        {},
    ],
    isOpenModel: false,
    dataModel: null,
}

function reducer(state, action) {
    switch (action.type) {
        case 'ADD_USER':
            return [...state, action.payload]

        case 'DELETE_USER':

        case 'CHANGE_USER_MONEY':

        case 'SHOW_MODEL':
            return { ...state, isOpenModal: true, dataModal: action.payload };

        case 'HIDE_MODEL':

        default:
            return state
    }
}
