import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { Categories, SortPopup } from '../components';
import { setCategory } from '../redux/actions/filtersAC';
import PizzaBlock from '../components/PizzaBlock';

const categoryNames = ['Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'];
const sortItems = [
  { name: 'популярности', type: 'popular' },
  { name: 'цене', type: 'price' },
  { name: 'алфавиту', type: 'alphabet' },
];

function Home() {
  const dispatch = useDispatch();
  const items = useSelector(({ pizzas }) => pizzas.items);

  const onSelectCategory = useCallback((index) => {
    dispatch(setCategory(index));
  }, []);

  return (
    <div className="container">
      <div className="content__top">
        <Categories onClick={onSelectCategory} items={categoryNames} />
        <SortPopup items={sortItems} />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {items &&
          items.map((pizza) => (
            <PizzaBlock
              key={pizza.id}
              id={pizza.id}
              name={pizza.name}
              imageUrl={pizza.imageUrl}
              sizes={pizza.sizes}
              types={pizza.types}
              price={pizza.price}
            />
          ))}
      </div>
    </div>
  );
}

export default Home;
