const Book = ({ data, removeBook }) => {
  return (
    <li>
      {data.title} <span onClick={() => removeBook(data.id)}>&#10008;</span>
    </li>
  );
};

export default Book;
