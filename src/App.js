import React, { Component } from 'react';
import "./App.css";
import Products from './component/Products';
import Header from './component/Header';
import Form from './component/Form';
import axios from 'axios';
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";


class App extends Component {

    state = {
        products: []
    }

    componentDidMount() {
        axios.get('http://127.0.0.1:8000/api/products')
            .then(res => this.setState({ products: res.data }))
    }



    //Delete Product
    deleteProduct = (Product_ID) => {
       this.setState({products:[...this.state.products.filter(product=>product.Product_ID!==Product_ID)]})
      // axios.delete('http://127.0.0.1:8000/api/products/${Product_ID}')
       //    .then(res => this.setState({
        //        products: [...this.state.products.filter(product => product.Product_ID !== Product_ID)]
         //   }));
    }

    render() {
        return (
            <Router>
                <div className="App">
                    <div className='ui main container'>
                        <div className="bg">

                            <Header />
                            <Route path="/Form">
                                <Form />
                            </Route>

                            <Products products={this.state.products} deleteProduct={this.deleteProduct} />

                        </div>

                    </div>
                </div>
            </Router>


        )
    }
}
export default App;

//import React, { Component } from 'react';
//import "./App.css";
//import Products from './component/Products';
//import Header from './component/Header';
//import Form from './component/Form';
//import axios from 'axios';


//class App extends Component {

  //  state = {
    //    products: []
    //}

    //componentDidMount() {
    //    axios.get('http://127.0.0.1:8000/api/products')
    //         .then(res => this.setState({ products: res.data }))
    //}
    //render() {
     //   return (
     //       <div className="App">
     //           <div className='ui main container'>
      //              <div className="bg">
//
       //                 <Header />
       ///                 <Form/>
        //                <Products products={this.state.products} />

         //           </div>
//
         //       </div>
         //   </div>

       // )
   // }
//}
//export default App;