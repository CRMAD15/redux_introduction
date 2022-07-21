import React from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../../store/actions/actions'
import TodoForm from '../pure/TodoForm'



const mapStateToProps = (state) => ({
    //not necesary
})

const mapDispatchToProps = (dispatch) => {
    return {
        submit: (text) => {
            dispatch(addTodo(text))
        }
    }

}



let TodosFormContainer = connect(mapStateToProps, mapDispatchToProps)(TodoForm)
export default TodosFormContainer