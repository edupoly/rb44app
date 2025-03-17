import { useQuery, gql } from '@apollo/client';
const GET_BOOKS = gql`
  query MyBooks {
    kithab {
      id
      title
      author
    }
  }
`;
function App() {
  const { loading, error, data } = useQuery(GET_BOOKS);
  return (
    <div>
      <h1 className="bg-success">Hello Soundarya</h1>
      {loading && <b>Loading...</b>}
      {!loading && <i>{JSON.stringify(data)}</i>}
    </div>
  );
}

export default App;
