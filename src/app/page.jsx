"use client"
import AddBookForm from "@/components/AddBookForm";
import BookList from "@/components/BookList";
import react from "react";
const HomePage = () => {
  const book = [{ title: "Clean Code" }];
  const [books, setBooks] = react.useState(book)

  react.useEffect(() => {
    console.log(books)
  },[books])
  return (
    <div>
      <AddBookForm addBook={(v) => {
        setBooks((abc) => [...abc, {title:v}])        
      }}/>
      <hr />
      <BookList books={books} removeBook={(v) => {
        setBooks((current) => current.filter((fruit) => fruit != v)) 
       
      }}/>
    </div>
  );
};

export default HomePage;
