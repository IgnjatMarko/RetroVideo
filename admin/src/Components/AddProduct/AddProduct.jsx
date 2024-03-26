import React, { useState } from "react";
import "./AddProduct.scss";
import upload_area from "../../assets/upload_area.svg";

const AddProduct = () => {
  const [image, setImage] = useState(false);
  const [imageInput, setImageInput] = useState("");

  const [productDetails, setProductDetails] = useState({
    name: "",
    image: "",
    extraImages: [],
    description: "",
    rating: "",
    tags: [],
    category: "Rent DVDs",
    new_price: "",
    old_price: "",
  });

  const imageHandler = (e) => {
    setImage(e.target.files[0]);
  };

  const changeHandler = (e) => {
    if (e.target.name === "tags") {
      const options = [...e.target.selectedOptions];
      const values = options.map((option) => option.value);
      setProductDetails({ ...productDetails, [e.target.name]: values });
    } else if (e.target.name === "extraImages") {
      setImageInput(e.target.value);
    } else {
      setProductDetails({ ...productDetails, [e.target.name]: e.target.value });
    }
  };

  const handleImageSubmit = (e) => {
    e.preventDefault();
    setProductDetails({
      ...productDetails,
      extraImages: [...productDetails.extraImages, imageInput],
    });
    setImageInput("");
    alert('Image URL added successfully!');
  };

  const Add_Product = async () => {
    console.log(productDetails);
    let responseData;
    let product = productDetails;

    let formData = new FormData();
    formData.append("product", image);

    await fetch("http://localhost:4000/upload", {
      method: "POST",
      headers: {
        Accept: "application/json",
      },
      body: formData,
    })
      .then((resp) => resp.json())
      .then((data) => {
        responseData = data;
      });

    if (responseData.success) {
      product.image = responseData.image_url;

      console.log(product);
      await fetch("http://localhost:4000/addproduct", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(product),
      })
        .then((resp) => resp.json())
        .then((data) => {
          data.success ? alert("Product added") : alert("Failed");
        });
    }
  };

  return (
    <div className="add-product">
      <div className="addproduct-itemfields">
        <p>Product Title</p>
        <input
          value={productDetails.name}
          onChange={changeHandler}
          type="text"
          name="name"
          placeholder="Type here"
          required
        />
        <p>Product Description</p>
        <input
          value={productDetails.description}
          onChange={changeHandler}
          type="text"
          name="description"
          placeholder="Type here"
        />
      </div>
      <div className="addproduct-price">
        <div className="addproduct-itemfields">
          <p>Price</p>
          <input
            value={productDetails.old_price}
            onChange={changeHandler}
            type="text"
            name="old_price"
            placeholder="Type here"
            required
          />
        </div>
        <div className="addproduct-itemfields">
          <p>Offer Price</p>
          <input
            value={productDetails.new_price}
            onChange={changeHandler}
            type="text"
            name="new_price"
            placeholder="Type here"
            required
          />
        </div>
        <div className="addproduct-itemfields">
          <p>Rating</p>
          <input
            value={productDetails.rating}
            onChange={changeHandler}
            type="text"
            name="rating"
            placeholder="Type here"
          />
        </div>
      </div>
      <div className="addproduct-itemfields">
        <p>Product Category</p>
        <select
          value={productDetails.category}
          onChange={changeHandler}
          name="category"
          className="add-product-selector"
        >
          <option value="Rent DVDs">Rent DVDs</option>
          <option value="Buy DVDs">Buy DVDs</option>
          <option value="Digital Movies">Digital Movies</option>
        </select>
      </div>
      <div className="addproduct-itemfields">
        <label htmlFor="file-input">
          <img
            src={image ? URL.createObjectURL(image) : upload_area}
            className="add-product-thumbnail-img"
            alt="upload-area"
          />
        </label>
        <input
          onChange={imageHandler}
          type="file"
          name="image"
          id="file-input"
          required
          hidden
        />
        <div className="addproduct-itemfields">
          <form onSubmit={handleImageSubmit}>
            <input
              type="text"
              value={imageInput}
              onChange={changeHandler}
              name="extraImages"
              placeholder="Enter image URL"
            />
            <button className="addproduct-extraimage" type="submit">Add extra image</button>
          </form>
        </div>
      </div>
      <div className="addproduct-price">
        <label className="addproduct-itemfields">
          <p>Tags:</p>
          <select
            className="addproduct-selectfield"
            multiple={true}
            value={productDetails.tags}
            onChange={changeHandler}
            name="tags"
          >
            <option value="" disabled>
              Multiple selection allowed
            </option>
            <option value="Action">Action</option>
            <option value="Adventure">Adventure</option>
            <option value="Sci-Fi">Sci-Fi</option>
          </select>
        </label>
      </div>
      <button
        onClick={() => {
          Add_Product();
        }}
        className="addproduct-btn"
      >
        Submit
      </button>
    </div>
  );
};

export default AddProduct;
