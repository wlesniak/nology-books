import { Button, Form, Input, Media } from "reactstrap";
import ReactStars from "react-rating-stars-component";
import axios from "axios";
import { useState } from "react";
import "./Book.css" 

export default function Book(props) {

    const [isFinishedChecked, setIsFinishedChecked] = useState(props.book.finished);

    function updateIsFinished() {
        const isFinished=!isFinishedChecked
        const url="/books/"+props.book.id
        const requestData={"finished":isFinished}
        axios.patch(url,requestData).then(res => {
            setIsFinishedChecked(isFinished)
        })
    }

    function updateRating(rating) {
        const url="/books/"+props.book.id
        axios.patch(url,{"rating":rating})
    }

    const deleteBook = () => {
        axios.delete("/books/"+props.book.id).then(res => {
            props.handleChange()
        })
      }

    return (
        <tr>
            <th><Media object src={props.book.imageURL} className="book_image"/></th>
            <th>{props.book.title}</th>
            <th>{props.book.author}</th>
            <th>{props.book.publishYear}</th>
            <th><Input type="checkbox" name="isFinished" id="isFinished" defaultChecked={isFinishedChecked} onClick={e => updateIsFinished(e)} /></th>
            <th><ReactStars name="rating" count={5} size={24} activeColor="#ffd700" value={props.book.rating} onChange={e => updateRating(e)}/></th>
            <th><Button name="deleteBook" id="deleteBook" onClick={e => deleteBook()}>Delete</Button></th>
        </tr>
    )
}