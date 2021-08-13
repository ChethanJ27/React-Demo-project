const express = require("express");
const users = require("./ApiData/User");

const app = express();

//body parser middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//enabling CORS
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

//get request
app.get("/api/user", (req, res) => {
  console.log("In Get");
  res.json(users);
});

//post request
app.post("/api/user", (req, res) => {
  console.log("In Post");
  users.push(req.body);
  res.json(users);
});

const PORT = process.env.PORT || 5001;

app.listen(PORT, () => console.log(`server started at port ${PORT}`));
