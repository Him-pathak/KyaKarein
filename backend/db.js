const mongoose = require("mongoose");

const url =
"mongodb+srv://sulochankhadka25:bIhHkgLyBLOFE8U3@cluster0.6yeqqji.mongodb.net/?retryWrites=true&w=majority";

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
