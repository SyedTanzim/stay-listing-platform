const Hotel = require('./models/schema');
const connectDB = require('./connectDB');
connectDB();
let data = [
    {
        name: "Taj Mahal Palace Hotel",
        discription: "Luxury heritage hotel overlooking the Gateway of India in Mumbai.",
        image: "https://images.unsplash.com/photo-1590077428593-a55bb07c4665?w=600&auto=format&fit=crop&q=60",
        price: 35000,
        site: "https://www.tajhotels.com",
        country: "India"
    },
    {
        name: "Burj Al Arab",
        discription: "Iconic sail-shaped luxury hotel in Dubai.",
        image: "https://images.unsplash.com/photo-1548013146-72479768bada?w=600&auto=format&fit=crop&q=60",
        price: 120000,
        site: "https://www.jumeirah.com",
        country: "UAE"
    },
    {
        name: "Eiffel Tower View Apartment",
        discription: "Modern apartment with a direct view of the Eiffel Tower.",
        image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=600&auto=format&fit=crop&q=60",
        price: 18000,
        site: "https://www.airbnb.com",
        country: "France"
    },
    {
        name: "Santorini Cliffside Resort",
        discription: "White-washed resort with sunset views over the Aegean Sea.",
        image: "https://images.unsplash.com/photo-1505731132164-cca90356c1a2?w=600&auto=format&fit=crop&q=60",
        price: 25000,
        site: "https://www.booking.com",
        country: "Greece"
    },
    {
        name: "Maldives Water Villa",
        discription: "Private water villa with direct ocean access.",
        image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600&auto=format&fit=crop&q=60",
        price: 60000,
        site: "https://www.marriott.com",
        country: "Maldives"
    }
];

Hotel.insertMany(data).then((res) => {
    console.log(res);
}).catch((err) => {
    console.log(err);
});