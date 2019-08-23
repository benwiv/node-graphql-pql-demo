import express from "express";
import bodyParser from "body-parser";
import { graphqlExpress } from "graphql-server-express";

const app = express();

app.use('/graphql', bodyParser.json(), graphqlExpress({ schema: myGraphqlSchema }));

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`server listening on port ${port}...`);
});