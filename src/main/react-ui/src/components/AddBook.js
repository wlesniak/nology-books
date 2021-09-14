import { Button, Form, FormGroup, Input, Label, Container,Row,Col} from "reactstrap"
import ReactStars from "react-rating-stars-component";
import axios from "axios";
import { useState } from "react";
import ReactDatePicker from "react-datepicker";
import "./AddBook.css"
export default function AddBook(props) {

    const [rating, setRating] = useState('');
    const [publishYear, setPublishedYear] = useState('');

    async function addBookReview(event) {
        event.preventDefault()
        const formData = new FormData(event.target);
        let addBookRequest = {
            title:formData.get("title"),
            author:formData.get("author"),
            publishYear:publishYear.getFullYear(),
            imageURL:formData.get("imageURL"),
            finished:formData.get("isFinished"),
            rating:rating
        }
        axios.post("/books",addBookRequest).then(res=> {
            props.history.push("/")
        });

    }

    return (
        <div className="AddBook">
        <Form onSubmit={addBookReview} className="form">
            <Row>
            <FormGroup>
                <Col>
                    <Label for="bookTitle">Title</Label>
                </Col>
                <Col>
                    <Input type="text" name="title" id="title" placeholder="Book title" required/>
                </Col>
            </FormGroup>
            </Row>
            <FormGroup>
            <Label for="author">Author</Label>
                <Input type="text" name="author" id="author" placeholder="Book author" required/>
            </FormGroup>
            <Label for="publishYear">Year published</Label>
            <ReactDatePicker
                selected={publishYear}
                onChange={(date) => setPublishedYear(date)}
                showYearPicker
                dateFormat="yyyy"
                maxDate={new Date()}
                className="datepicker.dropdown-menu"
                required
                placeholderText="yyyy"
            />
            <FormGroup>
                <Label for="imageURL">Image url</Label>
                <Input type="url" name="imageURL" id="imageURL" placeholder="Image URL" required/>
            </FormGroup>
            <FormGroup>
                <Input type="checkbox" name="isFinished" id="isFinished" value="true" defaultValue="false"/>
                <Label for="isFinished">Finished</Label>
            </FormGroup>  
            <Label for="rating">Rating:</Label>  
            <ReactStars name="rating" count={5} size={24} activeColor="#ffd700" onChange={setRating}/>
            <Button type="submit" >Add Book</Button>      
        </Form>
        </div>
    )
  }