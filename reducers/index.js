
import { ADD_IMAGE, GET_IMAGE } from "../constants/action-types";
const initialState = {
  images: []
};
const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_IMAGE:
      return {...state, images: [...state.images]}
    case ADD_IMAGE:     
      return { ...state, images: [...state.images, ...action.payload] };
    default:
      return state;
  }
};
export default rootReducer;
