import { Cpu } from "./classes/cpu";

export const CPU: Cpu[] = [
  {
    id: 1,
    rank: 1,
    brand: "Intel",
    name: "Core i9-12900KS",
    imageUrl: '../../assets/cpuImages/Intel-Core-i5-12900KS.jpg',
    price: 750,
    cores: 16,
    baseSpeed: 3.4,
    boostSpeed: 5.5,
    power: 150,
    connection: "LGA1200"
  },
  {
    id: 2,
    rank: 2,
    brand: "Intel",
    name: "Core i9-10900K",
    imageUrl: '../../assets/cpuImages/Intel-Core-i5-10900K.jpg',
    price: 390,
    cores: 10,
    baseSpeed: 3.7,
    boostSpeed: 5.3,
    power: 125,
    connection: "LGA1200"
  },
  {
    id: 3,
    rank: 3,
    brand: "Intel",
    name: "Core i9-11900K",
    imageUrl: '../../assets/cpuImages/Intel-Core-i5-11900K.jpg',
    price: 384,
    cores: 8,
    baseSpeed: 3.5,
    boostSpeed: 5.3,
    power: 125,
    connection: "LGA1200"
  },
  {
    id: 4,
    rank: 4,
    brand: "AMD",
    name: "Ryzen 9 5950X",
    imageUrl: '../../assets/cpuImages/AMD-Ryzen-5950X.jpg',
    price: 540,
    cores: 16,
    baseSpeed: 3.4,
    boostSpeed: 4.9,
    power: 105,
    connection: "AM4"
  },
  {
    id: 5,
    rank: 5,
    brand: "AMD",
    name: "Ryzen 7 5800X",
    imageUrl: '../../assets/cpuImages/AMD-Ryzen-5800X.jpg',
    price: 309,
    cores: 8,
    baseSpeed: 3.8,
    boostSpeed: 4.7,
    power: 105,
    connection: "AM4"
  }
];
