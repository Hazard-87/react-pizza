import React from 'react';
import PropTypes from 'prop-types';

const Categories = React.memo(({ items, onClickCategory, activeCategory }) => {
  return (
    <div className="categories">
      <ul>
        <li
          onClick={() => onClickCategory(null)}
          className={activeCategory === null ? 'active' : ''}>
          Все
        </li>
        {items &&
          items.map((name, index) => (
            <li
              className={activeCategory === index ? 'active' : ''}
              onClick={() => onClickCategory(index)}
              key={`${name}__${index}`}>
              {name}
            </li>
          ))}
      </ul>
    </div>
  );
});

Categories.propTypes = {
  // activeCategory: PropTypes.oneOf([PropTypes.number, null]),
  items: PropTypes.arrayOf(PropTypes.string).isRequired,
  onClickCategory: PropTypes.func.isRequired,
};

Categories.defaultProps = {
  items: [],
  activeCategory: null,
};

export default Categories;

// class Categories extends React.Component {
//   state = {
//     activeItem: 'Гриль',
//   };

//   selectesItem = (name) => {
//     this.setState({
//       activeItem: name,
//     });
//   };

//   render() {
//     const { items, onClick } = this.props;
//     return (
//       <ul>
//         <li>Все</li>
//         {items.map((name, index) => (
//           <li
//             key={`${name}__${index}`}
//             onClick={() => this.selectesItem(name)}
//             className={this.state.activeItem === name ? 'active' : ''}>
//             {name}
//           </li>
//         ))}
//       </ul>
//     );
//   }
// }
