const app = require("./src/app");
const connectToMongo = require("./src/configs/database");

const port = 5000;

app.listen(port, () => {
  console.log(`Server Running`);
  connectToMongo();
});
