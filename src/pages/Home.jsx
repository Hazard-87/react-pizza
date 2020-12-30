import React from 'react';

import { Categories, SortPopup } from '../components';
import PizzaBlock from '../components/PizzaBlock';

function Home({ pizzas }) {
  return (
    <div className="container">
      <div className="content__top">
        <Categories
          onClick={(name) => console.log(name)}
          items={['Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые']}
        />
        <SortPopup
          items={[
            { name: 'популярности', type: 'popular' },
            { name: 'цене', type: 'price' },
            { name: 'алфавиту', type: 'alphabet' },
          ]}
        />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {pizzas &&
          pizzas.map((pizza) => (
            <PizzaBlock
              key={pizza.id}
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
