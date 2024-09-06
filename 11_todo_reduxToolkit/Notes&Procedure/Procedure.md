- Store, Reducers, useSelector, useDispatcher

- First make a App folder in src, then make a store.js file in that.

- In that file write:

import {configureStore} from '@reduxjs/toolkit'

export const store = configureStore({})

- Store made...Now make Reducers(it's a functionality)

- Make a folder features in src then make a folder todo in that and then make a file todoSlice.js

- slice is the bigger version of reducer

- Now write:

import {createSlice, nanoid} from '@reduxjs/toolkit';

const initialState = { /_ there is always a inital state which we will use furthur _/
todos: [{id:1 , text:"Hello World"}]
}

- Then add this:

export const todoSlice = createSlice({
name: 'todo',
initialState,
reducers: {
// properties:functions
addTodo:(state,action) => { // state,action is the syntax
const todo = {
id: nanoid(),
text: action.payload,
};
},
removeTodo: () => {}
}
})

- Now we made the iniital state but we have to do something for update the state. So we write
  state.todos.push(todo)

- Similarly do in removeTodo

- Now we have to export this reducer again and write this

export const {addTodo, removeTodo} = todoSlice.actions

-
-

- Make the component folder in the sc folder and make two files in that
  named as Addtodo.jsx and Todos.jsx

- Addtodo.jsx

make a form in the return statement for ui
then make all the required functions declared in that form like input, setInput

- import useDispatch from react-redux

import {useDispatch} from 'react-redux'
const dispatch = useDispatch()

- What Dispatch do ?

- 'Dispatch' changes the values in 'store' using 'reducer'

- const addTodoHandler = (e) => {
  e.preventDefault
  dispatch(addTodo(input))
  setInput('')
  }

- Dispatch work is over

- Now there is another stuff is : useSelector

- It will use to list all the todos so we have to work in Todos.jsx

- Changes:

// useSelector Syntax:
const todos = useSelector((state) => state.todos); // todos from todoSlice
const dispatch = useDispatch();

<!-- <div>Todos</div>
      <ul className="list-none">
        {todos.map((todo) => (
          <li
            className="mt-4 flex justify-between items-center bg-zinc-800 px-4 py-2 rounded"
            key={todo.id}
          >
            <div className="text-white">{todo.text}</div>
            <button
              onClick={() => dispatch(removeTodo(todo.id))}
              className="text-white bg-red-500 border-0 py-1 px-4 focus:outline-none hover:bg-red-600 rounded text-md"
            > -->

- Then add Two components in App.jsx

- Then we need the outlet which we will provide in MAin.jsx using Provider
