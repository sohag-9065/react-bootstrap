import React from 'react';
import Card from '../Card/Card';

const CardGroup = () => {
    const products = [
        {id: 1, name: 'Laptop Pro', price: 125000},
        {id: 2, name: 'Laptop Grow', price: 225000},
        {id: 3, name: 'Laptop Trow', price: 325000},
    ]
    return (
        <div>
            <h2>This is my Cards</h2>
            <div className="card-group">
                {
                    products.map(product=> <Card 
                        key={product.id}
                        product={product}
                    ></Card>)
                }
            </div>
        </div>
    );
};

export default CardGroup;