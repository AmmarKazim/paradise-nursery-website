const airPurifyingPlants = [
  {
    name: "Aloe Vera",
    image: "/assets/air-purifying-plants/aloe-vera-plant.avif",
    price: "14",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    name: "Barberton Daisy",
    image: "/assets/air-purifying-plants/barberton-daisy.avif",
    price: "9",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    name: "Clara Curtis",
    image: "/assets/air-purifying-plants/clara-curtis.avif",
    price: "21",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    name: "English Ivy",
    image: "/assets/air-purifying-plants/english-ivy.avif",
    price: "18",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
];
const aromaticPlants = [
  {
    name: "Mexican Orange Blossom",
    image: "/assets/aromatic-plants/mexican-orange-blossom.avif",
    price: "17",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    name: "Moon Flower",
    image: "/assets/aromatic-plants/moon-flower.avif",
    price: "25",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    name: "Purple Wisteria Blooms",
    image: "/assets/aromatic-plants/purple-wisteria-blooms.avif",
    price: "14",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    name: "Snow Princess",
    image: "/assets/aromatic-plants/snowprincess.avif",
    price: "7",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
];
const coolingPlants = [
  {
    name: "Snake Plant",
    image: "/assets/air-purifying-plants/snake-plant.avif",
    price: "25",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    name: "Spider Plant",
    image: "/assets/air-purifying-plants/spider-plant.avif",
    price: "29",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    name: "Gardenias Flosers",
    image: "/assets/aromatic-plants/gardenias-flowers.avif",
    price: "18",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    name: "Honey Suckle",
    image: "/assets/aromatic-plants/honey-suckle.avif",
    price: "13",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
];

const products = {
  airPurifyingPlants: airPurifyingPlants,
  aromaticPlants: aromaticPlants,
  coolingPlants: coolingPlants,
};

const allProducts = [
  ...products.airPurifyingPlants,
  ...products.aromaticPlants,
  ...products.coolingPlants,
];

export default products;
export { allProducts };
