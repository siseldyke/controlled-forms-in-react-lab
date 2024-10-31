import { useState } from 'react';
const Bookshelf =() =>{
const [books, setBooks] = useState([
    { title: 'Fourth Wing', author: 'Rebecca Yarros' },
    { title: 'The Lion, the Witch and the Wardrobe', author: 'C.S. Lewis' },
  ]);

  const [newBook, setNewBook] = useState({
    title: '',
    author:''
  }

  )

  const handleInputChange =(event) =>{
     const {name, value} = event.target
    setNewBook(event.target.name)
}

const handleSubmit = (event) => {
    event.preventDefault();
    props.addBook(newBook)
    setNewBook(book)
  };

  const addBook =(newBook) =>{
    const updatedBooks = [...books, newBook]
    setBooks(updatedBooks)
    console.log(updatedBooks)
  }
  
return(
<div className="bookshelfDiv">
  <div className="formDiv">
    <h3>Add a Book</h3>
    <NewBook addBook ={addBook}/>
    <form onSubmit={handleSubmit}>
        <label htmlFor="titleInput">Title: </label>
        <input 
        type="text"
        id="id" 
        name="name"
        value={newBook.title}
        onChange={handleInputChange}
        />
        <label htmlFor="authorInput">Author: </label>
        <input 
        type="text"
        id="id" 
        name="name"
        value={newBook.author}
        onChange={handleInputChange}
        />
        <button type="submit">add book</button>
      </form>
  </div>
  <div className="bookCardsDiv">
    <ul>
        {books.map((title, author)=>
    <Bookshelf books ={books}/>
)}
    </ul>
    </div>
</div>
    )
}

export default Bookshelf;