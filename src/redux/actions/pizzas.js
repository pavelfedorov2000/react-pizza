// setPizzas должна взять массив пицц pizzas и создать объект
import axios from 'axios';

export const setLoaded = payload => ({
    type: 'SET_LOADED',
    payload
});

// асинхронный action (redux thunk): получение пицц (axios), потом сохранение (dispatch)
export const fetchPizzas = (sortBy, category) => (dispatch) => {
    dispatch(setLoaded(false));
    axios.get(`/pizzas?${category !== null ? `category=${category}` : ''}&_sort=${sortBy.type}&_order=${sortBy.order}`).then(({ data }) => {
        dispatch(setPizzas(data));
    });
};

export const setPizzas = (pizzas) => ({
    type: 'SET_PIZZAS',
    payload: pizzas
});