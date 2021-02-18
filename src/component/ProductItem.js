import React, { Component } from 'react';


class ProductItem extends Component {
    render() {
        const {Product_ID,Product_Name,Cost_of_Product,Sales_Price,Weight,Expire_Date}=this.props.product;
        return (

            <div className='ui main container'>
                <table class="table table-info  ">
                    <thead >
                        <tr>
                            <th>Product ID</th>
                            <th>Product Name</th>
                            <th>Cost of Product</th>
                            <th>Sales Price</th>
                            <th>Weight</th>
                            <th>Discount(%)</th>
                            <th>Expire Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{this.props.product.Product_ID}</td>
                            <td>{this.props.product.Product_Name}</td>
                            <td>{this.props.product.Cost_of_Product}</td>
                            <td>{this.props.product.Sales_Price}</td>
                            <td>{this.props.product.Weight}</td>
                            <td>{this.props.product.Discount_rate}</td>
                            <td>{this.props.product.Expire_Date}</td>
                            <td><button onClick={this.props.deleteProduct.bind(this,Product_ID)} style={btnStyle}>X</button></td>
                        </tr>
                    </tbody>
                </table>
                <br /><br /><br />

            </div>
        )
    }
}

const btnStyle = {
    background:'#C11B17', //delete cross mark button color
    color:'#FFFFFF',
    border:'none',
    padding:'5px 9px',
    borderRadius: '50%',
    cursor: 'pointer',
    float:'right'
}

export default ProductItem;