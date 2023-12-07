import Navbar from "../Navbar/Navbar";
import Image1 from "../../assets/image-1.png";
import Image2 from "../../assets/image-2.png";

function Item({ visible }) {
  
  if (!visible) return null;

  return (
    <>
      <Navbar />

      <div className="section">
        <div className="section__combo">
          <h3>Hot Dishes</h3>

          <div className="section__description">
            <h2>Oyster Dynamite</h2>
            <p>Two 1/2 shells, shitake and spinach baked w/ dynamite sauce</p>
            <h4>RM23.90 + RM1.20(SST) = </h4>
            <h3>RM25.10</h3>
            <h4>[166 Kcal]</h4>
          </div>

          <div className="section__image">
            <img src={Image2} alt="" />
          </div>

          <div className="section__description">
            <h2>Fried Calamari Salad</h2>
            <p>Two 1/2 shells, shitake and spinach baked w/ dynamite sauce</p>
            <h4>RM23.90 + RM1.20(SST) = </h4>
            <h3>RM25.10</h3>
            <h4>[166 Kcal]</h4>
          </div>

          <div className="section__image">
            <img src={Image1} alt="" />
          </div>
        </div>

        <div className="section__item">
          <div className="section__description">
            <h2>Shrimp Tempura</h2>
            <p>5 tiger shrimp with tempura sauce</p>
            <h4>RM23.90 + RM1.20(SST) = </h4>
            <h3>RM25.10</h3>
            <h4>[166 Kcal]</h4>
          </div>

          <div className="section__image">
            <img src={Image1} alt="" />
          </div>

          <div className="section__description">
            <h2>Shrimp Tempura</h2>
            <p>5 tiger shrimp with tempura sauce</p>
            <h4>RM23.90 + RM1.20(SST) = </h4>
            <h3>RM25.10</h3>
            <h4>[166 Kcal]</h4>
          </div>

          <div className="section__image">
            <img src={Image1} alt="" />
          </div>

          <div className="section__description">
            <h2>Shrimp Tempura</h2>
            <p>5 tiger shrimp with tempura sauce</p>
            <h4>RM23.90 + RM1.20(SST) = </h4>
            <h3>RM25.10</h3>
            <h4>[166 Kcal]</h4>
          </div>

          <div className="section__image">
            <img src={Image1} alt="" />
          </div>

          <div className="section__description">
            <h2>Shrimp Tempura</h2>
            <p>5 tiger shrimp with tempura sauce</p>
            <h4>RM23.90 + RM1.20(SST) = </h4>
            <h3>RM25.10</h3>
            <h4>[166 Kcal]</h4>
          </div>

          <div className="section__image">
            <img src={Image1} alt="" />
          </div>

          <div className="section__description">
            <h2>Shrimp Tempura</h2>
            <p>5 tiger shrimp with tempura sauce</p>
            <h4>RM23.90 + RM1.20(SST) = </h4>
            <h3>RM25.10</h3>
            <h4>[166 Kcal]</h4>
          </div>

          <div className="section__image">
            <img src={Image1} alt="" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Item;
