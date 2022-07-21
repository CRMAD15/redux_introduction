import { ADD_TODO, TOOGLE_TODO } from "../actions/actions"

// En un inicio los TODOs están vacios
let initialState = []

export const todoReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TODO:
            return [
                ...state,
                {
                    id: action.payload.id,
                    text: action.payload.text,
                    completed: false

                }
            ]
        case TOOGLE_TODO:
            return state.map((todo) =>
                (todo.id === action.payload.id)
                    ?
                    {
                        ...todo,
                        completed: !todo.completed
                    }
                    : todo
            )
        default:
            return state;
    }
}