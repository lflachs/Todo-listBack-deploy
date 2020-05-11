require('dotenv').config()
const express = require("express");
const mongoose = require("mongoose");
const app = express();
const path = require('path');
const todoRoutes = require("./routes/todo.routes");
app.use(express.static(path.join(__dirname, 'build')));


// Connection for Mongoose
const connect = () => {
  return mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
};

connect();

app.use(express.json());

app.use("/todo", todoRoutes);
const PORT = process.env.PORT || 5001;
app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});
app.listen(PORT, () => {
  console.log(`app is running on ${PORT}`);
});
