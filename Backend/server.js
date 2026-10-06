require("dotenv").config();

const dns = require("node:dns");
dns.setServers(["1.1.1.1", "8.8.8.8"]);

const app = require("./src/app");
const connecttoDB = require("./src/config/database");

connecttoDB();

  
  app.listen(3000, () => {
    console.log("Server is running on port 3000")
  });




