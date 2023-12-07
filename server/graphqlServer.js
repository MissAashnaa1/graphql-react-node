const { ApolloServer } = require("@apollo/server");

const { typeDefs } = require("./configs/typedefs");
const { resolvers } = require("./configs/resolvers");

const server = new ApolloServer({
  typeDefs,
  resolvers,
  // context: ({ req, res }) => ({ req, res }),
});

const graphqlServer = async () => {
  await server.start();
};

module.exports = { graphqlServer, server };
