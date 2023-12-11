import Image3 from "../../assets/image-3.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect } from "react";
import Toast from "../Toast/Toast";

function Product({ visible }) {
  if (!visible) return null;

  const [showToast, setShowToast] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const [itemData, setItemData] = useState(null);

  useEffect(() => {
    const addItemToCart = async () => {
      if (itemData) {
        try {

            console.log(JSON.stringify(itemData))
          const response = await fetch('http://localhost:3000/orders', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(itemData),
          });

          if (response.ok) {
            // Handle success, e.g., show a success message
            console.log('Item added to cart successfully!');
          } else {
            // Handle error, e.g., show an error message
            console.error('Error adding item to cart:', response.status, response.statusText);
          }
        } catch (error) {
          console.error('Error adding item to cart:', error);
        }
      }
    };

    addItemToCart();
  }, [itemData]);

  const handleShowToast = () => {
    // Update item data with the relevant details
    const newItemData = {
      code: 'unique-code', // Generate a unique code for the new item
      description: 'Product',
      amount: 'RM25.10', // Modify as needed
      quantity,
      subtotal: `RM${(25.10 * quantity).toFixed(2)}`, // Calculate subtotal based on the amount and quantity
    };

    // Set the item data to trigger the useEffect
    setItemData(newItemData);

    setShowToast(true);

    setTimeout(() => {
      setShowToast(false);
    }, 1000);
  };

  const handleIncrement = () => {
    setQuantity(quantity + 1);
  };

  const handleDecrement = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };

  return (
    <>
      <div className="toast">
        <Toast visible={showToast} />
      </div>

      <div className="product">
        <div className="product__img">
          <img src={Image3} alt="" />
        </div>

        <div className="product__description">
          <h2>Product</h2>
          <p>5 tiger shrimp with tempura sauce</p>
          <p>RM23.90 + RM1.20(SST) = RM25.10</p>
          <p>[166 Kcal]</p>
        </div>

        <div className="product__buy">
          <div className="product__buy_quantity">
            <button onClick={handleDecrement}>-</button>
            <span>{quantity}</span>
            <button onClick={handleIncrement}>+</button>
          </div>
        </div>
        <div className="product__buy_cart" onClick={handleShowToast}>
          <FontAwesomeIcon icon={faHouse} className="nav__icon" />
          <span>Add To Cart</span>
        </div>
      </div>
    </>
  );
}

export default Product;
