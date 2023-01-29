import Book from "@/components/Book";

const BookList = ({ books }) => {
  return (
    <>
      <h2>COLLECTION</h2>
      <ul>
        {books.map((book,key) => (
          <Book key={key} data={book} />
        ))}
      </ul>
    </>
  );
};

export default BookList;
