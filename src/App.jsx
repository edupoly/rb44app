import logo from './logo.svg';
import './App.css';
import { useQuery, gql, useMutation } from '@apollo/client';
const GET_BOOKS = gql`
                      query GetAllBooks {
                        getAllBooks {
                          author
                          title
                          id
                        }
                      }
`;
const ADD_BOOK = gql`
  mutation CreateBook($title: String!, $author: String) {
    createBook(title: $title, author: $author) {
      author
      id
      title
    }
  }
`
const DELETE_BOOK=gql`
  mutation DeleteBook($deleteBookId: ID!) {
    deleteBook(id: $deleteBookId) {
      author
      id
      title
    }
  }
`
function App() {
  const { loading, error, data }= useQuery(GET_BOOKS)
  const [deleteBookFn,{dloading,ddata}]=useMutation(DELETE_BOOK)
  // const [addBookFn] = useMutation(ADD_BOOK);
  // function addBook(){
  //   addBookFn({
  //     variables:{
  //       "title": "Technical Javascript",
  //       "author": "Praveen"
  //     }
  //   })
  // }
  return (
    <div>
      {/* <button onClick={()=>{addBook()}}>Add New Book</button> */}
      <h1 className="bg-success">Hello GraphQL</h1>
      {
        loading && <b>Loading.....</b>
      }
      {
        !loading && data?.getAllBooks.map((book)=>{
          return <li>
              {book.title}
              <button onClick={()=>{deleteBookFn({variables:{"deleteBookId":book.id}})}}>Delete</button>
            </li>
        })
      }
    </div>
  );
}

export default App;
