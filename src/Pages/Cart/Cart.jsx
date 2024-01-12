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

  return (
    <div className="cart">
      {loading ? (
        <p>Loading...</p>
      ) : (
        data ? (
          <>
              {data.map((item, index) => (
                <div key={index}>
                  {Object.values(item).map((value, index) => (
                    <div key={index}>{value}</div>
                  ))}
                </div>
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