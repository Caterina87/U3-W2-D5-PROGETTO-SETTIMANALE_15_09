const initialState = {
  location: {
    content: [],
  },
  weather: {
    content: [],
  },
};

const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_LOCATION":
      return {
        ...state,
        location: {
          ...state.location,
          content: [...state.location.content, action.payload],
        },
      };

    case "ADD_WEATHER":
      return {
        ...state,
        weather: {
          ...state.weather,
          content: [...state.weather.content, action.payload],
        },
      };

    default:
      return state;
  }
};
export default mainReducer;
