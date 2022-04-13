import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import './scss/app.scss';
import App from './App';
import { Provider } from 'react-redux';
import store from './redux/store';

//console.log(store.getState());

/* function counterReducer(state = 0, action) {
    switch (action.type) {
        case 'INCREMENT':
            return state + 1;
        case 'DECREMENT':
            return state - 1;
        default:
            return state;
    }
}

const store = createStore(counterReducer); // хранилище

console.log(store);

store.subscribe(() => console.log(store.getState())); // 0

store.dispatch({ type: 'INCREMENT' });
console.log(store); // 0 + 1 = 1

store.dispatch({ type: 'DECREMENT' });
console.log(store); // 1 - 1 = 0 */


ReactDOM.render(
    //<React.StrictMode>

    //</React.StrictMode>,
    <Router>
        <Provider store={store}>
            <App />
        </Provider>
    </Router>,
    document.getElementById('root')
);
