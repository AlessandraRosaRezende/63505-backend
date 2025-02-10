const mongoose = require("mongoose");
const orderModel = require("./models/orders.model");

let pizzaSize = "medium";

const environment = async () => {
  await mongoose.connect('mongodb+srv://alessandra:coder@clustercoder.n6nab.mongodb.net/?retryWrites=true&w=majority&appName=ClusterCoder');
  // await orderModel.insertMany(
  //   [
  //     {
  //       name: "pepperoni",
  //       size: "small",
  //       price: 20,
  //       quantity: 2,
  //       date: new Date(),
  //     },
  //     {
  //       name: "pepperoni",
  //       size: "medium",
  //       price: 30,
  //       quantity: 1,
  //       date: new Date(),
  //     },
  //     {
  //       name: "pepperoni",
  //       size: "large",
  //       price: 40,
  //       quantity: 2,
  //       date: new Date(),
  //     },
  //     {
  //       name: "cheese",
  //       size: "small",
  //       price: 12,
  //       quantity: 10,
  //       date: new Date(),
  //     },
  //     {
  //       name: "cheese",
  //       size: "medium",
  //       price: 22,
  //       quantity: 12,
  //       date: new Date(),
  //     },
  //     {
  //       name: "cheese",
  //       size: "large",
  //       price: 32,
  //       quantity: 20,
  //       date: new Date(),
  //     },
  //     {
  //       name: "vegan",
  //       size: "medium",
  //       price: 30,
  //       quantity: 5,
  //       date: new Date(),
  //     },
  //     {
  //       name: "vegan",
  //       size: "large",
  //       price: 40,
  //       quantity: 10,
  //       date: new Date(),
  //     },
  //   ]
  // )
  // const result = await orderModel.find();
  // console.log(result);

  let filter = await orderModel.find({ size: pizzaSize });
  console.log(filter);

  let orders = await orderModel.aggregate([
    {
      $match: {
        size: pizzaSize
      }
    },
    {
      $group: {
        _id: "$name",
        totalQuantity: {
          $sum: "$quantity"
        }
      }
    },
    {
      $sort: {
        totalQuantity: -1
      }
    },
    {
      $group: {
        _id: 1, // não quero que gere um novo id.
        orders: { $push: "$$ROOT" }
      }
    },
    {
      $project: {
        _id: 0, // quero que gere um novo id.
        orders: "$orders"
      }
    },
    {
      $merge: {
        into: 'report',
      }
    }
  ])
  console.log(orders);
}

environment();