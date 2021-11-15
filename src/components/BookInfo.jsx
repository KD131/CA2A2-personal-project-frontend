import { useEffect, useRef, useState } from "react";
import apiFacade from "../apiFacade";

function BookInfo({ isbn }) {
    const [content, setContent] = useState();
    const mounted = useRef(true);

    useEffect(() => {
        apiFacade.postBook(isbn, setContent, mounted);
        return () => mounted.current = false;
    }, []);


    function Info() {
        const { isbn_10: isbn, title, publish_date, authors } = content;
        return (
            <><h3>{title}</h3>
                <p>ISBN: {isbn}</p>
                <p>Published {publish_date}</p>
                <p>by {authors.map(a => a.name).join(", ")}</p>
            </>
        );
    }

    return (
        <>
            {!content
                ? "Loading..."
                : <Info />}
        </>
    );
}

export default BookInfo;