// Crear una variable para que la ID se sume con cada uno que creo


let numId = 0

export const ADD_TODO = "ADD_TODO";
export const TOOGLE_TODO = "TOOGLE_TODO";
export const SET_VISIBILITY_FILTER = "SET_VISIBILITY_FILTER";


/**
 * 
 *@param {string} text
 * @returns action ADD_TODO
 */

export const addTodo = (text) => {
    return {
        type: ADD_TODO,
        payload: {
            id: numId++,
            text
        }
    }
}
/**
 * 
 * @param {number} id 
 * @returns  action ADD_TODO
 */

export const toogleTodo = (id) => {
    return {
        type: TOOGLE_TODO,
        payload: {
            id
        }
    }

}
/**
 * 
 * @param {string} filter 
 * @returns action SET_VISIBILITY_FILTER
 */
export const setVisibilityFilter = (filter) => {
    return {
        type: SET_VISIBILITY_FILTER,
        payload: {
            filter

        }
    }

}

