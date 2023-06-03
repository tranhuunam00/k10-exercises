const initState = {
    listUser: [],
    isOpenModel: false,
    dataModel: null,
}


function reducer(state, action) {
    switch (action.type) {
        case 'SET_USER':
            return {
                ...state,
                listUser: [...state.listUser, action.payload],
            }
        case 'ADD_USER':
            return [...state.listUser, action.payload]

        case 'DELETE_USER':

        case 'CHANGE_USER_MONEY':

        case 'SHOW_MODEL':
            return { ...state, isOpenModal: true}

        case 'HIDE_MODEL':
            return { ...state, isOpenModal: false, dataModal: action.payload }
        default:
            return state
    }
}
export { initState }
export default reducer
