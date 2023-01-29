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
        setBooks((bookss) => [...bookss, {title:v}])

        
      }}/>
      <hr />
      <BookList books={books} />
    </div>
  );
};

export default HomePage;
