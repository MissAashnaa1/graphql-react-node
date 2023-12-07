import { gql, useQuery } from "@apollo/client";

const query = gql`
  query getTodos {
    getTodos {
      id
      title
      completed
    }
  }
`;

function App() {
  const { loading, data, error } = useQuery(query);
  console.log({ data, loading, error });

  return (
    <>
      <h1>Demo React App - GraphQL</h1>
      {loading ? <p>Loading...</p> : <pre>{JSON.stringify(data)}</pre>}
    </>
  );
}

export default App;
