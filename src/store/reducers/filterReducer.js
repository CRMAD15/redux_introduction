import { SET_VISIBILITY_FILTER } from "../actions/actions";

// valor inicial para el filto es SHOW_ALL

let inicialState = 'SHOW_ALL'


export const filterReducer = (state = inicialState, action) => {

    switch (action.type) {
        case SET_VISIBILITY_FILTER:
            return action.payload.filter
        default:
            return state

    }

}