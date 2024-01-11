import { useEffect, useState } from "react";


function Cart({ product }) {

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
    }

    fetchData();
  }, []);

  return (
    <>
      <div className="cart">
        {loading ? (
          <p>Loading...</p>
        ) : (
          data && data.length > 0 ? (
            data.map((item) => {
              <div>
                <p>{item.code}</p>
              </div>
            })
          ) : (
            <p>No data available.</p>
          )
        )}
        {/* {data.map((product) => (
          <div
            key={product.code}
            className="cart__item"
          >
            <h2>{product.description}</h2>
          </div>
        ))} */}
      </div>
    </>
  )
}

export default Cart;