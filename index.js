const express = require("express");
const cors = require("cors");
require("dotenv").config({ path: "./config/dot.env" });
const connectDB = require("./utils/db");
const errorMiddleware = require("./middlewares/error.middleware");
const unhandledError = require("./utils/unhandledException");
const app = express();
const data = require("./routes/data");
const Count = require("./models/count");
app.use(express.static("public"));
app.use(express.json());
app.use(cors({ origin: "*" }));

app.use("/api/v1", data);

app.use((req, res) => {
  res.status(404).json({
    message: "Not found",
  });
});
app.use(errorMiddleware);

app.listen(process.env.PORT, async () => {
  await connectDB();
  unhandledError();

  const count = await Count.findOne();
  if (!count) {
    await Count.create({
      addCount: 0,
      updateCount: 0,
    });
  }
  console.log("server is running");
});

module.exports = app;
