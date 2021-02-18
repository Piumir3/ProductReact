import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Form.css';
import axios from 'axios';


class Form extends Component {
    constructor(props) {
        super(props)

        this.state = {
            Product_ID: '',
            Product_Name: '',
            Cost_of_Product: '',
            Sales_Price: '',
            Weight: '',
            Discount_rate: '',
            Expire_Date: ''
        }
    }

    submithandler = e => {
        e.preventDefault()
        console.log(this.state)
        axios.post('http://127.0.0.1:8000/api/products', this.state)
            .then(response => {
                console.log(response)
            })
            .catch(error => {
                console.log(error)
            })
    }

    onChange = (e) => this.setState({ [e.target.name]: e.target.value });

    render() {

        return (
            <div className="bg2">
                <div className='ui main container'>

                    <form onSubmit={this.submithandler} className="ui form" >
                        <div>
                            <br /><br />

                            <div className="form-group row" >
                                <label className="col-sm-2 col-form-label">Product ID </label>

                                <div className="col-sm-10" >
                                    <input
                                        type="text"
                                        className="form-control"
                                        name="Product_ID"
                                        value={this.state.Product_ID}
                                        placeholder="Enter product id here"
                                        onChange={this.onChange}
                                    />
                                </div>

                            </div>

                            <div className="form-group row" >
                                <label className="col-sm-2 col-form-label">Product Name </label>

                                <div className="col-sm-10" >
                                    <input type="text"
                                        className="form-control"
                                        name="Product_Name"
                                        value={this.state.Product_Name}
                                        placeholder="Enter product name here"
                                        onChange={this.onChange}
                                    />
                                </div>

                            </div>

                            <div className="form-group row" >
                                <label className="col-sm-2 col-form-label">Cost of Product </label>

                                <div className="col-sm-10" >
                                    <input type="text"
                                        className="form-control"
                                        name="Cost_of_Product"
                                        value={this.state.Cost_of_Product}
                                        placeholder="Enter cost of product here"
                                        onChange={this.onChange} />
                                </div>

                            </div>

                            <div className="form-group row" >
                                <label className="col-sm-2 col-form-label">Sales Price </label>

                                <div className="col-sm-10" >
                                    <input type="text"
                                        className="form-control"
                                        name="Sales_Price"
                                        value={this.state.Sales_Price}
                                        placeholder="Enter sales price  here"
                                        onChange={this.onChange}
                                    />
                                </div>

                            </div>

                            <div className="form-group row" >
                                <label className="col-sm-2 col-form-label">Weight</label>

                                <div className="col-sm-10" >
                                    <input type="text"
                                        className="form-control"
                                        name="Weight"
                                        value={this.state.Weight}
                                        placeholder="Enter weight of the product here"
                                        onChange={this.onChange}
                                    />
                                </div>

                            </div>

                            <div className="form-group row" >
                                <label className="col-sm-2 col-form-label">Discount Rate(%)</label>

                                <div class="col-sm-10" >
                                    <input type="text"
                                        className="form-control"
                                        name="Discount_rate"
                                        value={this.state.Discount_rate}
                                        placeholder="Enter discount here"
                                        onChange={this.onChange}
                                    />

                                </div>
                            </div>

                            <div className="form-group row" >
                                <label className="col-sm-2 col-form-label">Expire Date</label>
                                <div className="col-sm-10" >
                                    <input
                                        type="date"
                                        className="form-control"
                                        name="Expire_Date"
                                        value={this.state.Expire_Date}
                                        placeholder="Enter expire date here"
                                        onChange={this.onChange}
                                    />
                                </div>

                            </div>
                            {''}{''}{''}{''}{''}{''}{''}{''}

                            <div>
                                <input
                                    type="submit"
                                    className="btn btn-primary"
                                    value="ADD"
                                />
                                {''}

                            </div>

                            <br /> < br /><br />
                        </div>

                    </form >
                </div>
            </div>

        )
    }
}

export default Form;