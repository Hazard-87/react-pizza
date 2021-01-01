import React, { useEffect } from 'react';
import { Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import './scss/app.scss';

import { Header, Home, Cart } from './components/';
import { fetchPizzas } from './redux/actions/pizzasAC';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPizzas());
  }, []);

  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <Route exact path="/" component={Home} />
        <Route path="/cart" component={Cart} />
      </div>
    </div>
  );
};

export default App;

// class App extends React.Component {
//   componentDidMount() {
//     axios.get('http://localhost:3000/db.json').then(({ data }) => {
//       this.props.setPizzas(data.pizzas);
//     });
//   }

//   render() {
//     console.log(this.props.items);
//     return (
//       <div className="wrapper">
//         <Header />
//         <div className="content">
//           <Route exact path="/" render={() => <Home pizzas={this.props.items} />} />
//           <Route path="/cart" component={Cart} />
//         </div>
//       </div>
//     );
//   }
// }

// const mapStateToProps = (state) => ({
//   items: state.pizzas.items,
// });

// const mapDispatchToProps = (dispatch) => ({
//   setPizzas: (items) => {
//     dispatch(setPizzas(items));
//   },
// });

// export default connect(mapStateToProps, mapDispatchToProps)(App);
