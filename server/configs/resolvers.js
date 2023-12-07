const { default: axios } = require("axios");

const resolvers = {
  Query: {
    getTodos: () => {
      return [
        {
          id: 1,
          title: "Todo 1",
          completed: false,
        },
        {
          id: 2,
          title: "Todo 2",
          completed: false,
        },
        {
          id: 3,
          title: "Todo 3",
          completed: false,
        },
      ];
    },

    getTodosJSONPlaceholder: async () =>
      (await axios.get("https://jsonplaceholder.typicode.com/todos")).data,

    getAllUsers: async () =>
      (await axios.get("https://jsonplaceholder.typicode.com/users")).data,
  },
};

module.exports = { resolvers };
