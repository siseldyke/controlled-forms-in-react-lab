import { useState } from 'react';
const Bookshelf =() =>{
const [books, setBooks] = useState([
    { title: 'Fourth Wing', author: 'Rebecca Yarros' },
    { title: 'The Lion, the Witch and the Wardrobe', author: 'C.S. Lewis' },
  ]);

  const [newBook, setNewBook] = useState({
    title: '',
    author:''
  })
 
  const handleInputChange =(event) =>{
    const {name , value} = event.target
    setNewBook((prevNewBooks) => ({
      ...prevNewBooks, [name] : value
    }))
    console.log(newBook)
  }
  const handleSubmit = (event) => {
    event.preventDefault();
    setBooks((previousBooks) => [
      ...previousBooks, newBook
      ])
    setNewBook({title: '', author:''})
    console.log(books)
  };

  
  
  
return (
<div className="bookshelfDiv">
  <div className="formDiv">
    <h3>Add a Book</h3>
    <form onSubmit={handleSubmit}>
        <label htmlFor="titleInput">Title: </label>
        <input 
        type="text"
        id="id" 
        name="title"
        value={newBook.title}
        onChange={handleInputChange}
        />
        
        <label htmlFor="authorInput">Author: </label>
        <input 
        type="text"
        id="id" 
        name="author"
        value={newBook.author}
        onChange={handleInputChange}
        />
        <button type="submit">add book</button>
      </form>
  </div>
  <div className="bookCardsDiv">
      <ul>
        {books.map((book , index) => (
          <li key = {index}>
            <p>
            Title: {book.title}
            </p>
            <p>
             Author:  {book.author}
            </p>
            </li>
          
        ) )}
        
      </ul>
  </div>
</div>
)}

export default Bookshelf;