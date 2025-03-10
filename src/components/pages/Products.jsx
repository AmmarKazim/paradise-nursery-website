import React from "react";
import Header from "../widgets/Header";
import ProductTile from "../widgets/ProductTile";
import products from "../../models/products";

function Products() {
  return (
    <main>
      <Header />
      <section className="container">
        <div className="text-center">
          <h3 className="border-top border-bottom d-inline-block px-4 my-2">
            Air Purifying Plants
          </h3>
        </div>
        <div className="row">
          {products.airPurifyingPlants.map((plant, i) => {
            return (
              <div className="m-0 p-0 col-4" key={i}>
                <ProductTile
                  name={plant.name}
                  image={plant.image}
                  price={plant.price}
                  description={plant.description}
                />
              </div>
            );
          })}
        </div>
      </section>
      <section className="container mt-5">
        <div className="text-center">
          <h3 className="border-top border-bottom d-inline-block px-4 my-2">
            Aromatic Plants
          </h3>
        </div>
        <div className="row">
          {products.aromaticPlants.map((plant, i) => {
            return (
              <div className="m-0 p-0 col-4" key={i}>
                <ProductTile
                  name={plant.name}
                  image={plant.image}
                  price={plant.price}
                  description={plant.description}
                />
              </div>
            );
          })}
        </div>
      </section>
      <section className="container mt-5">
        <div className="text-center">
          <h3 className="border-top border-bottom d-inline-block px-4 my-2">
            Cooling Plants
          </h3>
        </div>
        <div className="row">
          {products.coolingPlants.map((plant, i) => {
            return (
              <div className="m-0 p-0 col-4" key={i}>
                <ProductTile
                  name={plant.name}
                  image={plant.image}
                  price={plant.price}
                  description={plant.description}
                />
              </div>
            );
          })}
        </div>
      </section>
    </main>
  );
}

export default Products;
