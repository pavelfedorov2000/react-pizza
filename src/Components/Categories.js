import React from 'react';
import PropTypes from 'prop-types';
//import { useState } from 'react';

const Categories = React.memo(function Categories({ items, onClickCategory, activeCategory }) {
    //const [activeCategory, setActiveCategory] = useState(null);
    return (
        <div className="categories">
            <ul>
                <li className={activeCategory === null ? 'active' : ''} onClick={() => onClickCategory(null)}>Все</li>
                {items && items.map((category, i) => <li className={activeCategory === i ? 'active' : ''} onClick={() => onClickCategory(i)} key={`category-${i}`}>{category}</li>)}
            </ul>
        </div>
    );
});

// Типизация на минималках
Categories.propTypes = {
    //activeCategory: PropTypes.oneOf(PropTypes.number, null),
    items: PropTypes.arrayOf(PropTypes.string).isRequired,
    onClickCategory: PropTypes.func,
};

Categories.defaultProps = {
    activeCategory: null,
    items: [],
};

export default Categories;