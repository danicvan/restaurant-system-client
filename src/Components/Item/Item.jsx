import { useState, useEffect } from "react";
import Navbar from "../Navbar/Navbar";
import Product from "../Product/Product";

function Item({ visible }) {

  const [products, setProducts] = useState([]);

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

  const [showProduct, setShowProduct] = useState(false);

  const handleProductClick = () => {
    setShowProduct(!showProduct);
  };

  return (
    <>
      <Navbar />

      <div className={`section ${showProduct? "hidden" : ""}`}>
        <div className="section__combo">
          <h3>Hot Dishes</h3>

          {products.map((product) => (
            <div key={product.code} className="section__description" onClick={handleProductClick}>
              <h2>{product.name}</h2>
              <p>{product.description}</p>
              <h4>{`RM${product.price} + RM1.20(SST) = `}</h4>
              <h3>{`RM${parseFloat(product.price) + 1.20}`}</h3>
              <h4>[166 Kcal]</h4>
            </div>
          ))}
          
        </div>
      </div>

      <div className="product">
        <Product visible={showProduct} />
      </div>
    </>
  );
}

export default Item;
