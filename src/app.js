import express from "express";

const app = express();
const port = 3000;

const imageRoutes = require("../routes/imageRoutes");

app.get("/", (req, res) => {
  // I probably want this to send back the information needed for images
  res.send("Hello World! this backend is working");
});

app.use("/images", imageRoutes);

// the place where the server is listening for when the server starts
app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`);
});
