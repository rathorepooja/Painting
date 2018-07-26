
    import { ADD_IMAGE, GET_IMAGE, FILTER_IMAGE} from "../constants/action-types";
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