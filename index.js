import express from "express";
import mongoose from "mongoose";
import { ApolloServer } from 'apollo-server-express';
import { typeDefs } from "./graphql/schema";
import { resolvers } from "./graphql/resolvers";

const app = express();
const PORT = 4000;
const server = new ApolloServer({ typeDefs, resolvers });

server.applyMiddleware({ app });

mongoose.connect("mongodb://localhost/flashcards_db", {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

app.get("/", (req, res) => {
  res.send('It works!');
});

app.listen(PORT, () => {
  console.log(`Server is listening on port: ${PORT}`);
});
