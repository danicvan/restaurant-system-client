import { useEffect, useState } from "react";

function Cart() {

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:3000/cart');
        const result = await response.json();
        console.log(result);
        setData(result);
      } catch (error) {
        console.error('Error fetching data: ', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const renderCartItem = (item, index) => {
    return (
      <div key={index}>
        {Object.entries(item).map(([key, value], index) => (
          <div key={index}>
            {/* Conditionally render elements based on the key */}
            {key == "description" && <h2>{value}</h2>}
            {key == "amount" && <p>Amount: {value}</p>}
            {key == "quantity" && <p>Quantity: {value}</p>}
            {key == "subtotal" && <p>Subtotal: {value}</p>}
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="cart">
      {loading ? (
        <p>Loading...</p>
      ) : (
        data ? (
          <>
              {data.map((item, index) => (
                renderCartItem(item, index)
              ))}
            </>
        ) : (
          <p>No data available.</p>
        )
      )}
    </div>
  );
}

export default Cart;