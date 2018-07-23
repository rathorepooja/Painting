
    import { ADD_IMAGE, GET_IMAGE } from "../constants/action-types";
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