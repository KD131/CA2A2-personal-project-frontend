import { useRef, useState } from "react";
import { Button, Container, Form, FormControl } from "react-bootstrap";

function BookPage() {
    const [content, setContent] = useState();
    const mounted = useRef(true);

    return (
        <>
            <h2 align="center">Input ISBN</h2>
            <Form className="mt-3 m-auto" style={{ maxWidth: 400 }}>
                <FormControl className="mb-3" name="isbn" type="text" placeholder="ISBN" required />
                <Button className="d-block mx-auto">Submit</Button>
            </Form>
        </>
    );
}

export default BookPage;