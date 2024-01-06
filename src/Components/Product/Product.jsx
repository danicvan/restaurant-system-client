import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import Toast from "../Toast/Toast";

function Product({ visible, product }) {
  if (!visible || !product) return null;

  const [showToast, setShowToast] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const navigate = useNavigate();

  const handleShowToast = async () => {
    try {
      const response = await fetch("http://localhost:3000/orders", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          code: product.code,
          description: product.name,
          amount: `RM${parseFloat(product.price).toFixed(2)}`,
          quantity,
          subtotal: `RM${(parseFloat(product.price) * quantity).toFixed(2)}`,
        }),
      });

      if (response.ok) {
        console.log("Item added to cart successfully!");
      } else {
        console.error(
          "Error adding item to cart:",
          response.status,
          response.statusText
        );
      }
    } catch (error) {
      console.error("Error adding item to cart:", error);
    }

    setShowToast(true);

    setTimeout(() => {
      setShowToast(false);
      
      navigate("/search");
    }, 1000);
  };

  const handleIncrement = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity((prevQuantity) => prevQuantity - 1);
    }
  };

  return (
    <>
      <div className="toast">
        <Toast visible={showToast} />
      </div>

      <div className="product">
        <div className="product__img">
          <img src={product.image} alt={product.name} />
        </div>

        <div className="product__description">
          <h2>{product.name}</h2>
          <p>{product.description}</p>
          <p>{`RM${parseFloat(product.price).toFixed(2)} + RM1.20(SST) = RM${(
            parseFloat(product.price) + 1.2
          ).toFixed(2)}`}</p>
          <p>[166 Kcal]</p>
        </div>

        <div className="product__buy">

          <div className="product__buy_quantity">
            <button className="product__buy_quantity-left" onClick={handleDecrement}>-</button>
            <span>{quantity}</span>
            <button className="product__buy_quantity-right" onClick={handleIncrement}>+</button>
          </div>

          <div className="product__buy_cart" onClick={handleShowToast}>
          <FontAwesomeIcon icon={faHouse} className="nav__icon" />
          <span>Add To Cart</span>
        </div>
        </div>
        
        
      </div>
    </>
  );
}

export default Product;
