import React from 'react';
import { Route } from 'react-router-dom';
import { Header } from './Components';
import { Home, Cart } from './Pages';


function App() {
    //const [pizzas, setPizzas] = useState([]);

    //console.log(pizzas);

    return (
        <div className="wrapper">
            <Header />
            <div className="content">
                <Route path="/" component={Home} exact />
                <Route path="/cart" component={Cart} exact />
            </div>
        </div>
    );
}

export default App;

// classes + mapStateToProps + mapDispatchToProps
/* class App extends React.Component {
    componentDidMount() {
        axios.get('http://localhost:3000/db.json').then(({ data }) => {
            this.props.setPizzas(data.pizzas);
        });
    }
    render() {
        //console.log(this.props);
        return (
            <div className="wrapper">
                <Header />
                <div className="content">
                    <Route path="/" render={() => <Home pizzas={this.props.pizzas} />} exact />
                    <Route path="/cart" component={Cart} exact />
                </div>
            </div>
        );
    }
}

// для того чтобы из всего хранилища вытащить конкретные данные и пропихнуть их в props
const mapStateToProps = state => {
    return {
        pizzas: state.pizzas.pizzas
    }
}

// для того чтобы пропихнуть в props компонента (App) actions creators и вызывать их без dispatch
const mapDispatchToProps = dispatch => {
    return {
        setPizzas: (items) => dispatch(setPizzas(items)),
        dispatch
    }
} */

//export default connect(mapStateToProps, mapDispatchToProps)(App); // подключаем App к хранилищу
