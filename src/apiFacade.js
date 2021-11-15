import { SERVER_URL } from "./settings";
import fetchData from "./utils/fetchData";

function postBook(isbn, setContent, mounted) {
    fetchData(`${SERVER_URL}/api/books/${isbn}`, "POST", setContent, mounted);
}

function fetchWikipedia(setArticles, mounted) {
    fetchData(`${SERVER_URL}/api/info/sequential`, "GET", setArticles, mounted);
}

function fetchDadJokes(setJokes, mounted) {
    fetchData(`${SERVER_URL}/api/info/parallel`, "GET", setJokes, mounted);
}

function fetchFunStuff(setFun, mounted) {
    fetchData(`${SERVER_URL}/api/info/jokes`, "GET", setFun, mounted);
}

function fetchUserPage(setContent, mounted) {
    fetchData(`${SERVER_URL}/api/info/user`, "GET", setContent, mounted, true);
}

function fetchAdminPage(setContent, mounted) {
    fetchData(`${SERVER_URL}/api/info/admin`, "GET", setContent, mounted, true);
}

const apiFacade = {
    postBook,
    fetchWikipedia,
    fetchDadJokes,
    fetchFunStuff,
    fetchUserPage,
    fetchAdminPage
}

export default apiFacade;
