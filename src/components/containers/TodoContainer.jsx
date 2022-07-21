import { connect } from 'react-redux'

//Actions
import { toogleTodo } from '../../store/actions/actions'
import todoList from '../pure/TodoList';

const filterTodos = (todos, filter) => {
    switch (filter) {
        case 'SHOW_ALL':
            return todos;
        case 'SHOW_ACTIVE':
            return todos.filter((todo) => !todo.completed);
        case 'SHOW_COMPLETED':
            return todos.filter((todo) => todo.completed);
            ;
        default:
            return todos;
    }
}

const mapStateToProps = (state) => {
    return {
        todos: filterTodos(state.todosState, state.filterState)
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onTodoClick: (id) => {
            dispatch(toogleTodo(id))
        }
    }
}

const TodosContainer = connect(mapStateToProps, mapDispatchToProps)(todoList)
export default TodosContainer