"use client";

import react from "react";
const AddBookForm = ({ addBook }) => {
  const [title, setTitle] = react.useState("Domain Driven Design");
  
  return (
    <div>
      <h1>ADD TO COLLECTION</h1>
      <form
        onSubmit={(e) => {
          
          e.preventDefault();
          if (title === "") return;
           addBook(title)
           setTitle("")
        }}
      >
        <div>
          <label>Title </label>
          <input value={title} onChange={(event) => {
    setTitle(event.target.value);
  }} />
         
          <br />
          {title}
        </div>
      </form>
    </div>
  );
};

export default AddBookForm;
