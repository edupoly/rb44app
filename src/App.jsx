import logo from './logo.svg';
import './App.css';
import { useQuery, gql, useMutation } from '@apollo/client';
import { useState } from 'react';

const GET_BOOKS = gql`
  query GetAllBooks {
    getAllBooks {
      author
      title
      id
    }
  }
`;
const CREATE_BOOK=gql`
    mutation CreateBook($title: String!, $author: String) {
      createBook(title: $title, author: $author) {
        author
        id
        title
      }
    }

`
function App() {
  const { loading, error, data } = useQuery(GET_BOOKS);
  const [addBookFn]=useMutation(CREATE_BOOK)
  var [newBook,setNewBook] = useState({
    author:"",
    title:"",

  })
  function addBook(){
    addBookFn({
      variables:newBook
    }).then((res)=>{
      console.log(res);
    })
  }
  return (
    <div>
      <h1 className="bg-success">Hello Soundarya</h1>
      <input type="text" onChange={(e)=>{setNewBook({...newBook,author:e.target.value})}} placeholder='Enter Author'/>
      <br />
      <input type="text" onChange={(e)=>{setNewBook({...newBook,title:e.target.value})}} placeholder='Enter Title'/>
      <br />
      <button onClick={addBook}>Add Book</button>
      <ul>
        {
          data?.getAllBooks.map((book)=>{
            return <li>{book.title}</li>
          })
        }
      </ul>
    </div>
  );
}

export default App;
