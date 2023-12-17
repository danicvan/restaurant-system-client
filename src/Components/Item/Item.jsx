// Item.js

import { useState, useEffect } from "react";
import Navbar from "../Navbar/Navbar";
import Product from "../Product/Product";

function Item({ visible }) {
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:3000/products");
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error("Error fetching products data:", error);
      }
    };

    fetchData();
  }, []);

  if (!visible) return null;

  const handleProductClick = (product) => {
    setSelectedProduct(product);
  };

  return (
    <>
      <Navbar />

      <div className={`section ${selectedProduct ? "hidden" : ""}`}>
        <div className="section__combo">
          <h3>Hot Dishes</h3>

          {products.map((product) => (
            <div
              key={product.code}
              className="section__description"
              onClick={() => handleProductClick(product)}
            >
              <h2>{product.name}</h2>
              <p>{product.description}</p>
              <h4>{`RM${product.price} + RM1.20(SST) = `}</h4>
              <h3>{`RM${parseFloat(product.price) + 1.20}`}</h3>
              <h4>[166 Kcal]</h4>
              <img src={product.image} alt={product.description} />
            </div>
          ))}
        </div>
      </div>

      <div className="product">
        <Product visible={selectedProduct !== null} product={selectedProduct} />
      </div>
    </>
  );
}

export default Item;
