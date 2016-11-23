# My Library RESTful API
###Our API features:
* Handle CRUD for an books in library 1
* Use the proper HTTP verbs to make it RESTful (GET, POST, PUT, and DELETE) 2
* Return JSON data

###Example usage:

Get all my books in library with GET. Returns an array of JSON objects:

    https://my-library-api.herokuapp.com/api/books

Add new book in library with POST. Returns single JSON object with message (success or error)
 
    https://my-library-api.herokuapp.com/api/books
   
Add new book in library with POST. Returns single JSON object with message (success or error). Request body 
must have a JSON {"bookTitle" : "Book name"} or {"bookTitle" : "Book name",  "bookLang": "ru"} if title is not English

    https://my-library-api.herokuapp.com/api/books   

Add new book in library with POST. Returns single JSON object with message (success or error)

    https://my-library-api.herokuapp.com/api/books
   
Get single book in library with GET. Returns single JSON object

    https://my-library-api.herokuapp.com/api/books/:book_title
    
Update book info PUT. Returns single JSON object with message (success or error)

    https://my-library-api.herokuapp.com/api/books/:book_title
    
Delete a book with DELETE. Returns single JSON object with message (success or error)

    https://my-library-api.herokuapp.com/api/books/:book_title

Check it https://my-library-api.herokuapp.com/
