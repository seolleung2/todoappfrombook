import React from 'react';
import './TodoList.scss';
import TodoListItem from './TodoListItem';

const TodoList = ({ todos, onRemove }) => {
  return (
    <div className="TodoList">
      {todos.map((todo) => (
        <TodoListItem key={todo.id} todo={todo} onRemove={onRemove} />
      ))}
    </div>
  );
};

export default TodoList;
