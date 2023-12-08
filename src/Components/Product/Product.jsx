import Image3 from "../../assets/image-3.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse, faL } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import Toast from "../Toast/Toast";

function Product({ visible }) {
    if (!visible) return null;

    const [showToast, setShowToast] = useState(false);
    const [quantity, setQuantity] = useState(1);

    const handleShowToast = () => {
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
                        <button onClick={handleIncrement}>-+</button>
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
