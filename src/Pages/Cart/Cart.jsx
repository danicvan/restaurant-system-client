function Cart({ product }) {
  return (
    <>
    <h1>Cart</h1>
      {/* <div className="cart">
        <div className="cart__item">
          <div className="cart__item-img">
            <img src={product.image} alt={product.name} />
          </div>

          <div className="cart__item-description">
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <p>{`RM${parseFloat(product.price).toFixed(2)} + RM1.20(SST) = RM${(
              parseFloat(product.price) + 1.2
            ).toFixed(2)}`}</p>
            <p>[166 Kcal]</p>
          </div>
        </div>
      </div> */}
    </>
  )
}

export default Cart;