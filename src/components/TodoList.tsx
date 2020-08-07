import React from 'react';

type TodoListProps = {
    todos: any[],
    onToggle(id:number):void,
    onRemove(id:number):void
}
export const TodoList: React.FC<TodoListProps> = ({ todos, onToggle, onRemove }) => {
    return (
        <ul>
            {todos.map(todo => {
                const classes:string[]=['todo'];
                if(todo.completed) {
                    classes.push('completed');
                }
                return (
                    <li className={classes.join(' ')} key={todo.id}>
                        <label>
                            <input 
                                type="checkbox" 
                                checked={todo.completed} 
                                onChange={onToggle.bind(null, todo.id)}
                                />
                            <span>{todo.title}</span>
                            <i 
                                className="material-icons red-text" 
                                onClick={()=>onRemove(todo.id)}
                            >delete</i>
                        </label>
                    </li>
                );
            })}
        </ul>
    );
}
