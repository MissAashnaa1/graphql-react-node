const typeDefs = `
  type User {
    id: ID!
    name: String!
    email: String!
    password: String!
    phone : String!
  }

  type Todo {
    id: ID!
    title: String!
    completed: Boolean
  }

  type Query {
    getTodos : [Todo]
    getTodosJSONPlaceholder : [Todo]
    getAllUsers : [User]
  }

  

`;

module.exports = { typeDefs };
