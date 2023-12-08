import Navbar from "../../Components/Navbar/Navbar";

function Orders() {
  return (
    <>
      <Navbar />
      <h2>Order</h2>
      <p>
        <span>Date:</span>7/12/23
      </p>
      <p>
        <span>Invoice:</span>#2005
      </p>

      <table>
        <thead>
          <tr>
            <th>No.</th>
            <th>Description</th>
            <th>Rate</th>
            <th>Quatity</th>
            <th>Subtotal</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1.</td>
            <td>Shrimp Tempura</td>
            <td>RM 23.90</td>
            <td>2</td>
            <td>RM 47.80</td>
          </tr>
          <tr>
            <td>2.</td>
            <td>Oyster Dynamite</td>
            <td>RM 23.90</td>
            <td>1</td>
            <td>RM 23.90</td>
          </tr>
          <tr>
            <td>3.</td>
            <td>Fried Calamari Salad</td>
            <td>RM 23.90</td>
            <td>2</td>
            <td>RM 47.80</td>
          </tr>
        </tbody>
      </table>
      
      <div className="order__total">
        <div className="order__total_title">
          <h4>Additional Information</h4>
          <h4>Totals</h4>
        </div>

        <div className="order__total_description">
          <table>
            <tbody>
              <tr>
                <td>Subtotal:</td>
                <td>RM 119.50</td>
              </tr>
              <tr>
                <td>Tax:</td>
                <td>5.98</td>
              </tr>
              <tr>
                <td>Total</td>
                <td>RM 125.48</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="order__footer">
          <p>Thank you!  —masanaga@gmail.com</p>
        </div>
      </div>
    </>
  );
}

export default Orders;
