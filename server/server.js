const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const helmet = require("helmet");
const compression = require("compression");

const { graphqlServer, server } = require("./graphqlServer");
const { expressMiddleware } = require("@apollo/server/express4");

dotenv.config();

const app = express();

app.use(
  cors({
    origin: [process.env.CLIENT_URL],
    credentials: true,
  })
);

app.use(express.json());
app.use(helmet());
app.use(compression());

const startServer = async () => {
  await graphqlServer();

  app.get("/", (req, res) => {
    res.send("Hello World!");
  });

  app.use("/graphql", expressMiddleware(server));

  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
};

startServer();
