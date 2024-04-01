import React, { useEffect, useState } from 'react'
import './RelatedProducts.scss'
import Item from "../Item/Item";

function RelatedProducts(props) {
  const { product } = props;
  const [relatedProducts,setRelatedProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/allproducts")
    .then((response) => response.json())
    .then((data) => {
        let productsInCategory = data.filter(item => item.category === product.category);
        let lastFourInCategory = productsInCategory.slice(-4);
        setRelatedProducts(lastFourInCategory);
    });
  }, [product]);


  return (
    <div className='relatedproducts'>
        <h1>Related Products</h1>
        <hr />
        <div className="relatedproducts-item">
            {relatedProducts.map((item,i)=> {
                return <Item
                key={i}
                id={item.id}
                name={item.name}
                image={item.image}
                new_price={item.new_price}
                old_price={item.old_price}
              />
            })}
        </div>
    </div>
  )
}

export default RelatedProducts