//run whenever you want to add starter data to a new database
const mongoose = require("mongoose");
const Product = require("./models/crud");

mongoose
  .connect("mongodb://localhost:27017/crud", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Mongoose connected to MongoDB");
  })
  .catch((err) => {
    console.log("Mongo connection error");
    console.log(err);
  });

const p = new Product({
  name: "Grapefruit",
  price: 1.99,
  category: "fruit",
});
p.save()
  .then((p) => {
    console.log(p);
  })
  .catch((e) => {
    console.log(e);
  });

const seedProducts = [
  {
    name: "Fairy Eggplant",
    price: 1.0,
    category: "vegetable",
  },
  {
    name: "Organic Goddess Melon",
    price: 4.99,
    category: "fruit",
  },
  {
    name: "Organic Mini Seedless Watermelon",
    price: 3.99,
    category: "fruit",
  },
  {
    name: "Organic Celery",
    price: 1.5,
    category: "vegetable",
  },
  {
    name: "Chocolate Whole Milk",
    price: 2.69,
    category: "dairy",
  },
];

Product.insertMany(seedProducts)
  .then((res) => {
    console.log(res);
  })
  .catch((e) => {
    console.log(e);
  });
