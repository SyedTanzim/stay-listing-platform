const Hotel = require('../models/hotel');
const connectDB = require('../config/db');
connectDB();

const hotelData = [
  {
    name: "Azure Breeze Resort",
    description: "A serene getaway located right on the edge of the Mediterranean. Experience world-class spa treatments and private beach access.",
    image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?q=80&w=1000&auto=format&fit=crop",
    price: 350,
    site: "https://azurebreezeresort.example.com",
    country: "Greece"
  },
  {
    name: "Summit Peak Lodge",
    description: "Nestled in the heart of the Alps, this cozy lodge offers breathtaking mountain views and immediate access to the finest ski slopes.",
    image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?q=80&w=1000&auto=format&fit=crop",
    price: 22000,
    site: "https://summitpeak.example.com",
    country: "Switzerland"
  },
  {
    name: "Urban Oasis Hotel",
    description: "Modern luxury meets city convenience. Located in downtown Tokyo, featuring a rooftop infinity pool and Michelin-star dining.",
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=1000&auto=format&fit=crop",
    price: 48000,
    site: "https://urbanoasis.example.com",
    country: "Japan"
  },
  {
    name: "Desert Mirage Sands",
    description: "An architectural marvel in the middle of the desert. Enjoy star-gazing tours and luxury tent suites under the Sahara sky.",
    image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=1000&auto=format&fit=crop",
    price: 29000,
    site: "https://desertmirage.example.com",
    country: "Morocco"
  },
  {
    name: "Rainforest Retreat",
    description: "Eco-friendly luxury deep within the Amazon. Wake up to the sound of exotic birds and explore guided jungle treks.",
    image: "https://images.unsplash.com/photo-1544124499-58912cbddaad?q=80&w=1000&auto=format&fit=crop",
    price: 18000,
    site: "https://rainforestretreat.example.com",
    country: "Brazil"
  }
];

// Hotel.insertMany(hotelData).then((res) => {
//   console.log(res);
// }).catch((err) => {
//   console.log(err);
// });

// Hotel.deleteMany({})
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err);
//   });