import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import Toast from "../../Components/Toast/Toast";
import { useNavigate } from "react-router-dom";

function Cart() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [showToast, setShowToast] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const [messageToast, setMessageToast] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:3000/cart");
        const result = await response.json();
        console.log(result);
        setData(result);
      } catch (error) {
        console.error("Error fetching data: ", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleIncrement = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity((prevQuantity) => prevQuantity - 1);
    }
  };

  const handleShowToast = async (itemId) => {
    try {
      const response = await fetch(`http://localhost:3000/cart/${itemId}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        }
      });

      if (response.ok) {
        console.log("Item deleted successfully!");
      } else {
        console.error(
          "Error deleting item to cart:",
          response.status,
          response.statusText
        );
      }
    } catch (error) {
      console.error("Error deleting item to cart:", error);
    }

    setMessageToast("Product deleted successfully");
    setShowToast(true);

    setTimeout(() => {
      setShowToast(false);

      navigate("/menu");
      
    }, 1000);
  };

  return (
    <div className="cart">
      <div className="toast">
        <Toast visible={showToast} message={messageToast} />
      </div>
      {loading ? (
        <p>Loading...</p>
      ) : data ? (
        <div className="cart__item">
          {data.map((product) => (
            <div key={product.code} className="cart__item-description">
              <img src={product.image} alt={product.description}></img>
              <h2>{product.description}</h2>
              <p>{product.amount}</p>
              <div className="product__buy">
                <div className="product__buy_quantity">
                  <button
                    className="product__buy_quantity-left"
                    onClick={handleDecrement}
                  >
                    -
                  </button>
                  <span>{quantity}</span>
                  <button
                    className="product__buy_quantity-right"
                    onClick={handleIncrement}
                  >
                    +
                  </button>
                </div>

                <div
                  className="product__delete_cart"
                  onClick={() => handleShowToast(product.code)}
                >
                  <FontAwesomeIcon icon={faTrash} className="nav__icon" />
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p>No data available.</p>
      )}
    </div>
  );
}

export default Cart;
