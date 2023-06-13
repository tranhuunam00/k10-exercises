const initState = {
    isOpenModal: false,
    dataModal: null,
  };
  
  function reducer(state, action) {
    switch (action.type) {
      case "ADD_USER":
        const newListUser = [...state.listUser, action.payload];
        return { ...state, listUser: newListUser };
      case "CHANGE_USER":
        const newList = [...state.listUser];
        const index = newList.findIndex(
          (value) => value.id === action.payload.id
        );
        newList[index] = action.payload;
  
        return { ...state, listUser: newList };
      case "REMOVE_USER":
        return { loading: false, user: {} };
      case "SET_LIST_USER":
        return { loading: false, listUser: action.payload.listUser };
      case "SHOW_MODAL":
        return {
          ...state,
          isOpenModal: true,
          dataModal: action.payload.dataModal,
          typeModal: action.payload.typeModal,
          onClick: action.payload.onClick,
        };
      case "HIDE_MODAL":
        return { ...state, isOpenModal: false, dataModal: null };
  
      default:
    }
  }
  export { initState };
  
  export default reducer;
  