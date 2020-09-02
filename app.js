const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const mongoose = require("mongoose");
const schema = require("./schema/schema");
const cors = require("cors");
const app = express();

mongoose.connect(
  "mongodb+srv://<id>:<password>@cluster0.5km6u.mongodb.net/<database>?retryWrites=true&w=majority",
  { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false }
);
mongoose.connection.once("open", () => {
  console.log("db connected");
});

app.use(cors());

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: true,
  })
);

app.listen(4000, () => {
  console.log("listening port 4000");
});
