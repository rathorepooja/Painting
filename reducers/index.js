
import { ADD_IMAGE, GET_IMAGE , FILTER_IMAGE, RESET_IMAGE, EMPTY_IMAGES} from "../constants/action-types";
import _ from 'lodash';
const initialState = {
  allImages: [],
  images: []
};
const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case EMPTY_IMAGES:
      return {...state, images: [], allImages: []}
    case RESET_IMAGE:
      return {...state, images: state.allImages}
    case GET_IMAGE:
      return {...state, images: [...state.images]}
    case ADD_IMAGE:     
      return { ...state, allImages: [...state.images, ...action.payload], images: [...state.images, ...action.payload] };
    case FILTER_IMAGE:
        console.log(state.allImages);
       return {...state, images: state.allImages.filter((a)=> action.payload.indexOf(a.category) > -1 || action.payload.indexOf(a.author) > -1)}
    default:
      return state;
  }
};
export default rootReducer;
