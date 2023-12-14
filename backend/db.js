/* 
const mongoose = require("mongoose");

const mongoURI =
  "mongodb+srv://vinith2003:8a4QRLyW62smFMgr@cluster0.udcas1q.mongodb.net/foodpandamern?retryWrites=true&w=majorit";

const mongoDB = async () => {
  try {
    await mongoose.connect(mongoURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to MongoDB");

    const fetched_data = await mongoose.connection.db.collection("food_items");
    fetched_data.find({}).toArray(async function (data) {
      const foodCategory = await mongoose.connection.db.collection("foodCategory");
      foodCategory.find({}).toArray(function (catData) {
          global.food_items = data;
          global.foodCategory = catData;
      });
    }); // Use await here to wait for the data

    // global.food_items = data;
    //console.log(global.food_items);
  } catch (error) {
    console.error("Error connecting to MongoDB: ", error);
  }
};
module.exports = mongoDB;
*/

const mongoose = require('mongoose')
const mongoURI = "mongodb+srv://vinith2003:8a4QRLyW62smFMgr@cluster0.udcas1q.mongodb.net/foodpandamern?retryWrites=true&w=majority";

module.exports = async () => {
  try {
    await mongoose.connect(mongoURI, { useNewUrlParser: true });
    console.log("connected to mongo");

    const foodCollection = mongoose.connection.db.collection("food_items");
    const data = await foodCollection.find({}).toArray();

    const categoryCollection = mongoose.connection.db.collection("foodCategory");
    const Catdata = await categoryCollection.find({}).toArray();

    global.food_items=data;
    global.foodCategory = Catdata;
    //console.log(global.food_items, global.foodCategory )
    // return { data, Catdata };
  } catch (error) {
    console.log("---" + error);
    
  }
};