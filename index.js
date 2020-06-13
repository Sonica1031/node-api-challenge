const express = require("express");
const projectRoutes = require("./data/protjectRoutes/projects");
const actionRoutes = require("./data/actionRoutes/action");
const server = express();
server.use(express.json());
server.use((err, req, res, next) => {
  console.log(err);
  res
    .status(500)
    .json({ errorMessage: "Something went wrong, Please try again later" });
});
server.use("/projects", projectRoutes);
server.use("/projects/:id/actions", actionRoutes);

server.get("/", (req, res, next) => {
  res.status(200).json("Hello! This is my wonderful API!");
});

server.listen(5000, () => {
  console.log("API running on port 5000");
});
