import {createStore} from 'redux';

const initialState = {
	todos: [
		{text: "Go to the gym"},
		{text: "Go for shopping"}
	]
};
const reducer = (state=initialState, action) => {

	if(action.type === 'APP/ADD_TODO') {
		const todos = [...state.todos];
		todos.push({text: action.payload});
		state.todos = todos;
		return {...state};
	}

	return state;
}


export default createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());