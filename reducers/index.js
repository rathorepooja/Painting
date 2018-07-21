
import { ADD_IMAGE } from "../constants/action-types";
const initialState = {
  images: [{
    "name": "first Photod",
    "year": 2015,
    "creation-date": "15/05/2015",
    "status": "sold",
    "category": "",
    "price": 20,
    "currency":"",
    "sellable": true,
    "author": "Pooja",
    "id": 0
}]
};
const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_IMAGE:
      console.log(action)
      return { ...state, images: [...state.images, ...action.payload] };
    default:
      return state;
  }
};
export default rootReducer;
