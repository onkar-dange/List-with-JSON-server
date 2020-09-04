const listDefaultState = [];

export default (state = listDefaultState, action) => {
  switch (action.type) {
    case "FETCH_BIGIN":
      return {
        ...state,
        loading: true,
      };

    case "DATA_FETCH":
      console.log("DATA_FETCH", action.payload);
      return {
        ...state,
        api_data: action.payload,
        loading: true,
      };

    default:
      return state;
  }
};
