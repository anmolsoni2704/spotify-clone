export const initialState = {
  user: null,
  playlists: [],
  discover_weekly: null,
  item: null,
  token: null,
  //   "BQCr6Lo_Dknta4cQcIrI8pQ3P36ZW_QWuMGA_k3a4JsIyXMSVbGKJk4MHNDTkiFutmX4Y1EiIrgCOcWkt_5hFqJp7Z2PDGxkQoOd_3-im2KLQStyX0nItqXpJVss9FaAHN0ps7TucyFdOg8BjBVrRhWX1TvMpsrOWug0nYnHyJOWkXtC",
};

const reducer = (state, action) => {
  // Action=> type,[payload]

  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };

    case "SET_ITEM":
      return {
        ...state,
        item: action.item,
      };

    case "SET_TOKEN":
      return {
        ...state,
        token: action.token,
      };

    case "SET_PLAYLISTS":
      return {
        ...state,
        playlists: action.playlists,
      };

    case "SET_DISCOVER_WEEKLY":
      return {
        ...state,
        discover_weekly: action.discover_weekly,
      };

    default:
      return state;
  }
};

export default reducer;
