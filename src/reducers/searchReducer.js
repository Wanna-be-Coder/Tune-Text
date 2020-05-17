import {
  GET_RESULTS,
  CLEAR_RESULTS,
  SET_LOADING,
  SEARCH_ERROR,
} from "../actions/types";

const initialState = {
  results: null,
  loading: false,
  error: null,
  lyrics: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_LOADING:
      return {
        ...state,
        loading: true,
      };
    case SEARCH_ERROR:
      console.error(action.payload);
      return {
        ...state,
        error: action.payload,
      };
    case GET_RESULTS:
      return {
        ...state,
        results: action.payload.data,
        lyrics: action.payload.lyrics,
        loading: false,
      };

    case CLEAR_RESULTS:
      return {
        ...state,
        results: [],
        loading: false,
      };

    default:
      return state;
  }
};
