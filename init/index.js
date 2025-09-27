const mongoose = require("mongoose");
const initData = require("./data.js");
const Listing = require("../models/listing.js");




const MONGO_URL = "mongodb://127.0.0.1:27017/wanderlust";

main()
  .then(() => {
    console.log("connected to DB");
  })
  .catch((err) => {
    console.log(err);
  });

async function main() {
  await mongoose.connect(MONGO_URL);
}

const initDB = async () => {
   await Listing.deleteMany({});
   initData.data = initData.data.map((obj) => ({
    ...obj,
     owner: "68cfc8d2d0e333407dfe38d3",
    }));
await Listing.insertMany(initData.data);
console.log("data was initialized");
};
   
initDB();





  

// const sampleListings = [
//   {
    // title: "Paris Getaway",
    // description: "A romantic trip to Paris",
    // price: 250,
    // location: "Paris",
    // country: "France",
    // image: {
      // filename: "listingimage",
    //   image:  "https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    // },
  // },
  // {
    // title: "Goa Beach House",
    // description: "Enjoy sunny beaches of Goa",
    // price: 120,
    // location: "Goa",
    // country: "India",
    // ✅ You can also leave image empty; it will take default
  //   image: {},
//    },
// ];



