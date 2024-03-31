import React, { useContext, useState } from "react";
import "./SCSS/ShopCategory.scss";
import { ShopContext } from "../Context/ShopContext";
import Item from "../Components/Item/Item";

function ShopCategory(props) {
  const { all_product } = useContext(ShopContext);

  const [selectedTag, setSelectedTag] = useState("");
  const [visibility, setVisibility] = useState(8);

  const handleTagChange = (event) => {
    setSelectedTag(event.target.value);
  };

  const handleLoadMore = () => {
    setVisibility((prev) => prev + 8);
  };

  const filteredProducts = all_product.filter((item) => {
    return item.category === props.category;
  });

  const filteredItems =
    selectedTag === ""
      ? filteredProducts
      : filteredProducts.filter((item) => {
          return item.tags.includes(selectedTag);
        });


  return (
    <div className="shop-category">
      <img className="shopcategory-banner" src={props.banner} alt="banner" />
      <div className="shopcategory-indexSort">
        <p>
          <span>Showing {Math.min(visibility, filteredItems.length)}</span> out
          of {filteredProducts.length} products
        </p>
        <select
          className="shopcategory-sort"
          value={selectedTag}
          onChange={handleTagChange}
        >
          <option value="">All Genres</option>
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
        {filteredItems.slice(0, visibility).map((item, i) => (
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

      {filteredItems && visibility < filteredItems.length && (
        <a href="#footer">
          <div onClick={handleLoadMore} className="shopcategory-loadmore">
            Explore More
          </div>
        </a>
      )}
    </div>
  );
}

export default ShopCategory;
