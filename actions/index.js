
    import { ADD_IMAGE, GET_IMAGE, FILTER_IMAGE, RESET_IMAGE, EMPTY_IMAGES} from "../constants/action-types";
    /**
     * 
     * @param {*} images : will represent the new images object which admin wants to add.
     */
    export const addImage = images => ({ type: ADD_IMAGE, payload: images });
    /**
     * 
     * This will retrive all the images from the staore 
     */
    export const getImage = images => ({ type: GET_IMAGE });
    /**
     * 
     * This will filter images all the images from the store 
     */
    export const filterImage = filterValue => ({ type: FILTER_IMAGE, payload: filterValue});
    /**
     * 
     * This will rest images
     */
    export const resetImage = () => ({ type: RESET_IMAGE});

    /**
     * 
     * this will set the images array as empty
     * 
     */
    export const emptyImages = () => ({type: EMPTY_IMAGES});