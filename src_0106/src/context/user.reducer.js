const initState = {
    listUser: [],
    isOpenModel_Edit: false,
    isOpenModel_Detail: false,
    isOpenModel_Delete: false,
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
            return [...state, action.payload]

        case 'DELETE_USER':
            return { ...state, isOpenModel_Delete: true, dataModal: action.payload }

        case 'SHOW_MODEL':
            return { ...state, isOpenModel_Edit: true , dataModal: action.payload }

        case 'HIDE_MODEL':
            return { ...state, isOpenModel_Edit: false, dataModal: action.payload }
        default:
            return state
    }
}

export { initState }
export default reducer
