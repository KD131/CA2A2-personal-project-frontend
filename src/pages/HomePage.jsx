export default function Home() {
    return <>
        <h1>Home</h1>
        <p>This was intended to be an app where you would log in, input an ISBN, and it would show you the book and add it to your favourites which is tied to your account. A somewhat simple entity relations exercise.</p>
        <p>However, due to time constraints, none of the account stuff works. You can, however, use the input field to add books to the database and have it return the book it added.</p>
        <p>I think that's really the brunt of the exercise here, so it might not take much to add the account functionality, but I just don't have the time.</p>
        <h2>Here's how it works</h2>
        <p>You input an ISBN string. That posts to an endpoint like this "api/books/{"{isbn}"}." From there, I contact the <a href="https://openlibrary.org" target="_blank" rel="noopener noreferrer">openlibrary.org</a> API, which returns a book in JSON format.</p>
        <p>Unfortunately, the API is a bit confusing and the content of any given book is a little unreliable. For some "instances" of books, they don't even give you the author.</p>
        <p>Next, we have to fetch the authors hopefully listed in the book object. When the time comes to persist the book, we first check if the authors are already in the database, and if they are, we use the existing reference.</p>
        <p>The next step would've been to involve a user account, each account having a list of books, another many-to-many relationship, and the input field on the site would be used to add books to that list.</p>
        <p>As far as how I've used the startcode; I used the <i>HttpUtils.fetch()</i> method to get data from the API. And I use the header, pages, and facade to make requests from the frontend. When I'd implemented the account feature, I would've made use of the User page.</p>

        <h2>Conclusion</h2>
        <p>It's not that far off from actually working.</p>
        <p>Truth be told, this is not the personal project I really wanted to make. What I really wanted to do was to create a site that interfaced with the Guild Wars 2 API. You'd have an account on this site with an API key for the game, and you could then query data from the game API, such as account and character data, and the dailies. Maybe even a notice if it was a a specific daily, like Mystic Forger.</p>
        <p>But the requirements said you had to implement new entities, and I would have no need for any in that project. I wouldn't be persisting any data at all, except for the API key which would just be a field under user. Instead I'd just query all data from the API and show it here.</p>
        <p>What I wanted to make was a small clone of <a href="https://gw2efficiency.com" target="_blank" rel="noopener noreferrer">gw2efficiency.com</a> because the Guild Wars 2 API would've been a more fun API to interact with. Instead I get an annoying library. And here we are.</p>
    </>
}