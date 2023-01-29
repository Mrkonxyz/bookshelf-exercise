import Book from "@/components/Book";

const BookList = ({ books, removeBook }) => {
  return (
    <>
      <h2>COLLECTION</h2>
      <ul>
        {books.map((book,key) => (

          <>
          <Book key={key} data={book} />
          <button onClick={() => {
              removeBook(book)
          }}>remove</button>
          </>
        ))}
      </ul>
    </>
  );
};

export default BookList;
