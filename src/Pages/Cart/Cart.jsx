import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import Toast from "../../Components/Toast/Toast";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";

function Cart() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [showToast, setShowToast] = useState(false);
  const [messageToast, setMessageToast] = useState(null);
  const navigate = useNavigate();

  // Define a state for quantities
  const [quantities, setQuantities] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch the cart data
        const cartResponse = await fetch("http://localhost:3000/cart");
        const cartData = await cartResponse.json();
        console.log(cartData);

        // Set the cart data to the state
        setData(cartData);

        // Initialize quantities state based on fetched data
        const initialQuantities = {};
        cartData.forEach((product) => {
          initialQuantities[product.code] = product.quantity;
        });
        setQuantities(initialQuantities);
      } catch (error) {
        console.error("Error fetching data: ", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleIncrement = (code) => {
    setQuantities((prevQuantities) => ({
      ...prevQuantities,
      [code]: prevQuantities[code] + 1,
    }));
  };

  const handleDecrement = (code) => {
    if (quantities[code] > 1) {
      setQuantities((prevQuantities) => ({
        ...prevQuantities,
        [code]: prevQuantities[code] - 1,
      }));
    }
  };

  const handleShowToast = async (itemId) => {
    try {
      const response = await fetch(`http://localhost:3000/cart/${itemId}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.ok) {
        console.log("Item deleted successfully!");

        // Refresh the data after successful deletion
        const updatedResponse = await fetch("http://localhost:3000/cart");
        const updatedResult = await updatedResponse.json();
        setData(updatedResult);

        // Update quantities based on the new data
        const updatedQuantities = {};
        updatedResult.forEach((product) => {
          updatedQuantities[product.code] = product.quantity;
        });
        setQuantities(updatedQuantities);
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
    }, 1000);
  };

  async function updateCartResponse(updatedCartItems) {
    try {
      const updateCartResponse = await fetch("http://localhost:3000/api/cart", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedCartItems),
      });
  
      if (updateCartResponse.ok) {
        console.log("Cart updated successfully!");
      } else {
        console.error(
          "Error updating cart:",
          updateCartResponse.status,
          updateCartResponse.statusText
        );
      }
    } catch (error) {
      console.error("Error updating cart:", error);
    }
  }

  const handleConfirm = async () => {

    let cartItems = []; // Define cartItems outside of the try block

    try {
      // Fetch the current cart data
      const cartResponse = await fetch("http://localhost:3000/cart");
      const cartData = await cartResponse.json();

      cartItems = cartData.length > 0 ? cartData[0] : [];

      // Compare the quantities in the cart data with the quantities in the state
      const updatedCartItems = cartData.map((item) => {
        if (quantities[item.code] !== undefined) {
          // If quantity is different, update the quantity in the cart data
          if (quantities[item.code] !== item.quantity) {
            return { ...item, quantity: quantities[item.code] };
          }
        }
        return item;
      });

      await updateCartResponse(updatedCartItems);

    } catch (error) {
      console.error("Error confirming purchase:", error);
    }

    try {
      // Save the cart data to the orders.json file
      const saveOrderResponse = await fetch("http://localhost:3000/orders", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          code: cartItems.code,
          description: cartItems.description,
          amount: cartItems.amount,
          quantity: cartItems.quantity,
          subtotal: cartItems.subtotal,
        }),
      });

      if (saveOrderResponse.ok) {
        console.log("Order saved successfully!");

        // Clear the cart by sending a DELETE request to the cart endpoint
        const clearCartResponse = await fetch("http://localhost:3000/cart", {
          method: "DELETE",
        });

        if (clearCartResponse.ok) {
          console.log("Cart cleared successfully!");
        } else {
          console.error(
            "Error clearing cart:",
            clearCartResponse.status,
            clearCartResponse.statusText
          );
        }
      } else {
        console.error(
          "Error saving order:",
          saveOrderResponse.status,
          saveOrderResponse.statusText
        );
      }
    } catch (error) {
      console.error("Error confirming purchase:", error);
    }

    navigate("/orders");
  };

  return (
    <div className="cart">
      <div className="toast">
        <Toast visible={showToast} message={messageToast} />
      </div>
      {loading ? (
        <p>Loading...</p>
      ) : data ? (
        <div className="cart__itens">
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
                      onClick={() => handleDecrement(product.code)}
                    >
                      -
                    </button>
                    <span>{quantities[product.code]}</span>
                    <button
                      className="product__buy_quantity-right"
                      onClick={() => handleIncrement(product.code)}
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
          <div
            className={`cart__confirm ${data.length > 0 ? "show-button" : "hide-button"
              }`}
          >
            <Button variant="contained" onClick={() => handleConfirm()}>
              Confirm
            </Button>
          </div>
        </div>
      ) : (
        <p>No data available.</p>
      )}
    </div>
  );
}

export default Cart;
