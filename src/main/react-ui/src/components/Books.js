import axios from "axios";
import { useEffect, useState } from "react";
import { Table, Input} from "reactstrap";
import Book from "./Book";

export default function Books() {

    const [books, setBooks] = useState([]);
    const [isFinishedSelectedValue, setFinishedSelectedValue] = useState("ALL");

    const handleChange = e => {
      loadReloadBooks();
    };

    useEffect(() => {
      loadReloadBooks();
    },[]);

    function loadReloadBooks() {
      axios.get("/books").then(res => {
        setBooks(res.data._embedded.books)
      })
    }

function IsFinishedDropDown() {
  return (
    <Input
      type="select"
      name="isFinishedSelect"
      id="isFinishedSelect"
      onChange={(e) => setFinishedSelectedValue(e.target.value)}
      value={isFinishedSelectedValue}
    >
      <option value={"ALL"}>Is Finished</option>
      <option value={"FINISHED"}>Finished Only</option>
      <option value={"PENDING"}>Pending Only</option>
    </Input>
  )
}

function filterBasedOnFinished(book) {
    if(isFinishedSelectedValue==="FINISHED") {
      return !book.finished
    } else if(isFinishedSelectedValue==="PENDING") {
      return book.finished
    } 
      return true
}

    return (
        <Table striped>
        <thead>
          <tr>
            <th>Image</th>
            <th>Title</th>
            <th>Author</th>
            <th>Published</th>
            <th><IsFinishedDropDown/></th>
            <th>Rating</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
            {books.filter(book => filterBasedOnFinished(book)).map(book => (
              <Book key={book.id} book={book} handleChange={handleChange}/>
            ))}
        </tbody>
        </Table>
    )
}