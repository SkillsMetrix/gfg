import React from 'react';
import {useSelector} from 'react-redux'
function ProductComponent(props) {


    const data = useSelector(state => state.allProducts.products)
    const {id, productName, category} = data[0]
    return (
        <div className="four wide column">
            <div className="ui link cards">
                <div className="card">
                    <div className="image"></div>
                    <div className="content">
                        <div className="header">
                            {productName}</div>

                    </div>
                </div>
            </div>


        </div>
    );
}

export default ProductComponent;
