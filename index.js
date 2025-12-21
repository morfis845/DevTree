import express from "express";

const app = express();
//Routing
app.get("/", (req, res) => {
  res.send("Hello World from Express and Node.js");
});

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
