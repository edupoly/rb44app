import logo from './logo.svg';
import './App.css';
import { useQuery, gql } from '@apollo/client';
const GET_BOOKS = gql`
                      query GetAllBooks {
                        getAllBooks {
                          author
                          title
                        }
                      }
`;
function App() {
  const { loading, error, data }= useQuery(GET_BOOKS)
  return (
    <div>
      <h1 className="bg-success">Hello GraphQL</h1>
      {
        loading && <b>Loading.....</b>
      }
      {
        !loading && data?.getAllBooks.map((book)=>{
          return <li>{book.title}</li>
        })
      }
    </div>
  );
}

export default App;
