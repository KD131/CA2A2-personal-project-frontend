import { useRef, useState } from "react";
import { Button, Form, FormControl } from "react-bootstrap";
import BookInfo from "../components/BookInfo";

function BookPage() {
    const [content, setContent] = useState();
    const mounted = useRef(true);

    function fetchBook(event) {
        event.preventDefault();
        const isbn = event.target.isbn.value;
        setContent(<BookInfo isbn={isbn} />);
    }

    return (
        <>
            <h2 align="center">Input ISBN</h2>
            <Form className="my-3 m-auto" style={{ maxWidth: 400 }} onSubmit={fetchBook}>
                <FormControl className="mb-3" name="isbn" type="text" placeholder="ISBN" required />
                <Button type="submit" className="d-block mx-auto">Submit</Button>
            </Form>
            {content}
        </>
    );
}

export default BookPage;