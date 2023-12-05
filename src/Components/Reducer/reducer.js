export const reducer = (state, action) => {
  switch (action.type) {
    case "GET_DOCTORS":
      return { ...state, data: action.payload };
    case "GET_DOCTOR":
      return { ...state, doctor: action.payload };
    case "ADD_FAV":
      return { ...state, favs: [...state.favs, action.payload] };
    case "DELETE_FAV":
      return { ...state, favs: state.favs.filter(fav => fav.id !== action.payload) };
    case "CHANGE_THEME":
      return { ...state, theme: state.theme === 'light' ? 'dark' : 'light' };
    default:
      return state;
  }
};
