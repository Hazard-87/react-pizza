import React, { useState } from 'react';

const Categories = React.memo(({ items, onClick }) => {
  const [activeItem, setActiveItem] = useState(null);

  const onSelectItem = (index) => {
    setActiveItem(index);
    onClick(index);
  };

  return (
    <div className="categories">
      <ul>
        <li onClick={() => onSelectItem(null)} className={activeItem === null ? 'active' : ''}>
          Все
        </li>
        {items &&
          items.map((name, index) => (
            <li
              className={activeItem === index ? 'active' : ''}
              onClick={() => onSelectItem(index)}
              key={`${name}__${index}`}>
              {name}
            </li>
          ))}
      </ul>
    </div>
  );
});

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
