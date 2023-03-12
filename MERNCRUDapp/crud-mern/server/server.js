const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();
const app = express();

// creating middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

app.get("/", (req, res) => {
  res.send("express is here");
});

mongoose
  .connect(
    `mongodb+srv://${process.env.DB_NAME}:${process.env.DB_PASSWORD}@cluster0.hrp39hb.mongodb.net/?retryWrites=true&w=majority`
  )
  .catch((err) => console.log(err));

//DB schema and model

const postSchema = mongoose.Schema({
  title: String,
  description: String,
});

const Post = mongoose.model("Post", postSchema);

app.post("/create", (req, res) => {
  Post.create({
    title: req.body.title,
    description: req.body.description,
  })
    .then((doc) => console.log(doc))
    .catch((err) => console.log(err));
});

app.get("/posts", (req, res) => {
  Post.find()
    .then((items) => res.json(items))
    .catch((err) => console.log(err));
});

app.delete("/delete/:id", (req, res) => {
  // console.log(req.params)
  Post.findByIdAndDelete({ _id: req.params.id })
    .then((doc) => console.log(doc))
    .catch((err) => console.log(err));
});

app.put("/update/:id", (req, res) => {
  // console.log(req.params);
  // console.log(req.body);

  Post.findByIdAndUpdate(
    { _id: req.params.id },
    {
      title: req.body.title,
      description: req.body.description,
    }
  )
    .then((doc) => console.log(doc))
    .catch((err) => console.log(err));
});

app.listen(3001, () => {
  console.log("server is running ");
});
