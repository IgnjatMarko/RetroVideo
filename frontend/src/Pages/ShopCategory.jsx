import React, { useContext, useState } from "react";
import "./SCSS/ShopCategory.scss";
import { ShopContext } from "../Context/ShopContext";
import Item from "../Components/Item/Item";

function ShopCategory(props) {
  const { all_product } = useContext(ShopContext);
  const [selectedTag, setSelectedTag] = useState("");

  const handleTagChange = (event) => {
    setSelectedTag(event.target.value);
  };

  const filteredProducts = all_product.filter((item) => {
    return item.category === props.category;
  });

  const filteredItems = selectedTag === "" ? filteredProducts : filteredProducts.filter((item) => {
    return item.tags.includes(selectedTag);
  });

  console.log(filteredProducts);

  return (
    <div className="shop-category">
      <img className="shopcategory-banner" src={props.banner} alt="banner" />
      <div className="shopcategory-indexSort">
        <p>
          <span>Showing 1-12</span> out of 36 products
        </p>
        <select className="shopcategory-sort" value={selectedTag} onChange={handleTagChange}>
          <option value="">Genre Tags</option>
          <option value="Action">Action</option>
          <option value="Adventure">Adventure</option>
          <option value="Sci-Fi">Sci-Fi</option>
          <option value="Comedy">Comedy</option>
          <option value="Crime">Crime</option>
          <option value="Thriller">Thriller</option>
          <option value="Mystery">Mystery</option>
          <option value="Drama">Drama</option>
          <option value="Horror">Horror</option>
          <option value="Fantasy">Fantasy</option>
        </select>
      </div>
      <div className="shopcategory-products">
        {filteredItems.map((item, i) => (
          <Item
            key={i}
            id={item.id}
            name={item.name}
            image={item.image}
            new_price={item.new_price}
            old_price={item.old_price}
            quantity={item.quantity}
            tags={item.tags}
          />
        ))}
      </div>
      <div className="shopcategory-loadmore">Explore More</div>
    </div>
  );
}

export default ShopCategory;
