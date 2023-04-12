const mongoose = require("mongoose");

const url =
"mongodb://admin:ELfj3TjKvm6eXZhb@ac-t8b0mpy-shard-00-00.tuokist.mongodb.net:27017,ac-t8b0mpy-shard-00-01.tuokist.mongodb.net:27017,ac-t8b0mpy-shard-00-02.tuokist.mongodb.net:27017/?ssl=true&replicaSet=atlas-yi00hj-shard-0&authSource=admin&retryWrites=true&w=majority";

mongoose.set('strictQuery',true);
module.exports.connect = () => {
  mongoose
    .connect(url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("MongoDB connected successfully");
    })
    .catch((error) => console.log("Error: ", error));
};
