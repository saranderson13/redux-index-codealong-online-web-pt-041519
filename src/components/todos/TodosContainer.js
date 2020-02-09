import React, { Component } from 'react';
import { connect } from 'react-redux';
import Todo from './Todo'

class TodosContainer extends Component {

    renderTodos = () => this.props.todos.map((todo, id) => <Todo key={id} text={todo} />)

    // THIS IS THE SAME AS ABOVE, BUT IF IT IS NOT DECLARED ON A SINGLE LINE, RETURNS ARE NEEDED.
    // renderTodos = () => {
    //     return this.props.todos.map((todo, id) => {
    //         return <Todo key={id} text={todo} />
    //     })
    // }

    render() {
        return (
            <div>
                {this.renderTodos()}
            </div>
        );
    }
};

const mapStateToProps = state => {
    console.log(state.todos)
    return {
        todos: state.todos
    }
}

export default connect(mapStateToProps)(TodosContainer);