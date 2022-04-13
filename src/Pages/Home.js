import React from 'react';
import { Categories, SortSelect, PizzaBlock, PizzaLoader } from '../Components';
import { useSelector, useDispatch } from 'react-redux';
import { setCategory, setSortBy } from '../redux/actions/filters';
import { fetchPizzas } from '../redux/actions/pizzas';
import { addPizzaToCart } from '../redux/actions/cart';

const categories = ['Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'];
const sortItems = [
    {
        name: 'популярности',
        type: 'popular',
        order: 'desc',
    },
    {
        name: 'цене',
        type: 'price',
        order: 'desc',
    },
    {
        name: 'алфавиту',
        type: 'name',
        order: 'asc',
    },
]

function Home() {

    const dispatch = useDispatch();
    const pizzas = useSelector(({ pizzas }) => pizzas.pizzas); // вытаскиваем пиццы из стора
    const isLoaded = useSelector(({ pizzas }) => pizzas.isLoaded); // вытаскиваем состояние загрузки из стора
    const { category, sortBy } = useSelector(({ filters }) => filters); // вытаскиваем категории и сортировку по из стора сразу через деструктуризацию
    const cartItems = useSelector(({ cart }) => cart.items); // вытаскиваем пиццы из стора

    const onSelectCategory = React.useCallback((i) => {
        dispatch(setCategory(i)); // экшн выбор категории
    }, []);

    const onSelectSortType = React.useCallback((type) => {
        dispatch(setSortBy(type)); // экшн выбор типа сортировки
    }, []);

    const handleAddPizzaToCart = obj => {
        dispatch({
            type: 'ADD_PIZZA_CART',
            payload: obj
        }); // экшн на добавление пиццы в корзину
    };

    React.useEffect(() => {
        dispatch(fetchPizzas(sortBy, category)); // вернет функцию
        /* axios.get('http://localhost:3001/pizzas').then(({ data }) => {
            dispatch(setPizzas(data));
            //setPizzas(data.pizzas);
        }); */
        //fetch('db.json')
        //.then((response) => response.json())
        //.then(json => setPizzas(json.pizzas));
    }, [category, sortBy]); // [] = componentDidMout

    return (
        <div className="container">
            <div className="content__top">
                <Categories activeCategory={category} items={categories} onClickCategory={onSelectCategory} />
                <SortSelect activeSortBy={sortBy.type} options={sortItems} onClickSort={onSelectSortType} />
            </div>
            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">
                {isLoaded
                    ? pizzas.map(pizza => <PizzaBlock onClickAddPizza={handleAddPizzaToCart} key={pizza.id} {...pizza} isLoaded={true} addedCount={cartItems[pizza.id] && cartItems[pizza.id].items.length} />)
                    : Array(12).fill(0).map((_, index) => <PizzaLoader key={`loader-${index}`} />)
                }
            </div>
        </div>
    );
}

export default Home;