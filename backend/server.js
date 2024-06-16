const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 5000;

mongoose.connect(
  "mongodb+srv://kushawahyogesh93:Yogesh@cluster0.j9tkecq.mongodb.net/dragandrop?retryWrites=true&w=majority&appName=Cluster0");

const itemSchema = new mongoose.Schema({
  content: String,
  position: {
    x: Number,
    y: Number,
  },
});

const Item = mongoose.model("Item", itemSchema);

app.use(cors());
app.use(express.json());

app.get("/api/items", async (req, res) => {
  const items = await Item.find();
  res.json(items);
});

app.post("/api/items", async (req, res) => {
  const { content, position } = req.body;
  const newItem = new Item({ content, position });
  await newItem.save();
  res.json(newItem);
});

app.put("/api/items/:id", async (req, res) => {
  const { id } = req.params;
  const { content, position } = req.body;
  const updatedItem = await Item.findByIdAndUpdate(
    id,
    { content, position },
    { new: true }
  );
  res.json(updatedItem);
});

app.delete("/api/items/:id", async (req, res) => {
  const { id } = req.params;
  await Item.findByIdAndDelete(id);
  res.json({ message: "Item deleted" });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
