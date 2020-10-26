import React from 'react';

class TodoForm extends React.Component {
    constructor() {
        super();
        this.state = {
            input: '',
        }
    }

    handleChanges = e => {
        this.setState({
            input: e.target.value,
        })
    };

    handleAddSubmit = (e) => {
        e.preventDefault();
        this.props.handleAddTodo(this.state.input)
        this.setState({
            input: '',
        })
    }

    handleClearSubmit = (e) => {
        e.preventDefault();
        this.props.handleClearSubmitTasks()
    }

    render() {
        return(
            <form>
                <input 
                    type='text'
                    name='item'
                    onChange={this.handleChanges}
                    value={this.state.input}
                    placeholder='...todo'
                />
                <button onClick={this.handleAddSubmit}>Add Todo</button>
                <button onClick={this.handleClearSubmit}>Clear Completed</button>

            </form>
        )
    }

}

export default TodoForm;