const express = require("express");
const logger = require("./Logs/logger");
const PORT = process.env.PORT || "5555";
const app = express();

app.use(express.json())

app.get("/", (req, res) => {

    logger.log("debug", "Hello, World!"); 
    logger.debug("debug ne");
    logger.error("error ne");
    logger.info("info ne");



    // using debug method directly
    res.json({ method: req.method, message: "Hello World", ...req.body });
});

app.get('/404', (req, res) => {
    logger.error("404 error"); //error method
    logger.debug("The is the 404 route.");
    res.sendStatus(404);
})

app.get("/user", (req, res) => {
    try {
      throw new Error("Invalid user");
    } catch (error) {
      logger.error("Auth Error: invalid user");
      logger.debug("The is the user route.");
      res.status(500).send("Error!");
    }
  });

app.listen(parseInt(PORT, 10), () => {
    console.log(`Listening on http://localhost:${PORT}`);
});