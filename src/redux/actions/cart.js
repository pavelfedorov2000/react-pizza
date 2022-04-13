export const addPizzaToCart = (pizzaObj) => ({
    type: 'ADD_PIZZA_CART',
    payload: pizzaObj,
});

export const clearCart = () => ({
    type: 'CLEAR_CART',
});

export const plusPizza = (id) => ({
    type: 'PLUS_PIZZA',
    payload: id,
});

export const minusPizza = (id) => ({
    type: 'MINUS_PIZZA',
    payload: id,
});

export const removeCartItem = (id) => ({
    type: 'REMOVE_CART_ITEM',
    payload: id,
});