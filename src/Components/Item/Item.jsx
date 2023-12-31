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

      <div className={`section`}>
        <Navbar />
        <div className={`section__items ${selectedProduct ? "hidden" : ""}`}>
          <div className="items">
            <div className={`items__combo`}>
              <h3>Hot Dishes</h3>

              {products.map((product) => (
                <div
                  key={product.code}
                  className="items__combo-description"
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

            <div className={`items__single`}>

              {products.map((product) => (
                <div
                  key={product.code}
                  className="items__single-description"
                  onClick={() => handleProductClick(product)}
                >
                  <div className="items__single-item">
                    <h2>{product.name}</h2>
                    <p>{product.description}</p>
                    <h4>{`RM${product.price} + RM1.20(SST) = `}</h4>
                    <h3>{`RM${parseFloat(product.price) + 1.20}`}</h3>
                    <h4>[166 Kcal]</h4>
                  </div>

                  <div className="items__single-img">
                    <img src={product.image} alt={product.description} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className={`section__item ${!selectedProduct ? "hidden" : ""}`}>
          <Product visible={selectedProduct !== null} product={selectedProduct} />
        </div>
      </div>
    </>
  );
}

export default Item;
