import * as actionTypes from "../actions/actionTypes";

// reducer with initial state
const initialState = {
  fetching: false,
  dog: null,
  error: null
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.DOG_API_CALL_REQUEST:
      return { ...state, fetching: true, error: null };
    case actionTypes.DOG_API_CALL_SUCCESS:
      return { ...state, fetching: false, dog: action.dog };
    case actionTypes.DOG_API_CALL_FAILURE:
      return { ...state, fetching: false, dog: null, error: action.error };
    default:
      return state;
  }
};

export default reducer;
