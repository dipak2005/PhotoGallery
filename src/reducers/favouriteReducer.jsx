export const favoritesReducer = (state, action) => {
  switch (action.type) {
    case "TOGGLE_FAVORITE": {
      const id = action.payload;

      if (state.includes(id)) {
        return state.filter((favoriteId) => favoriteId !== id);
      }

      return [...state, id];
    }

    default:
      return state;
  }
};