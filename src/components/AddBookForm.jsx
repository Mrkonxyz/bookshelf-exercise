"use client";

import react from "react";
const AddBookForm = ({ addBook }) => {
  const [title, setTitle] = react.useState("Domain Driven Design");
  const onHandlechang = (event) => {
    setTitle(event.target.value);
  };
  return (
    <div>
      <h1>ADD TO COLLECTION</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
           addBook(title)
           setTitle("")
        }}
      >
        <div>
          <label>Title </label>
          <input onChange={onHandlechang} />
          <button type="submit">add</button>
          <br />
          {title}
        </div>
      </form>
    </div>
  );
};

export default AddBookForm;
