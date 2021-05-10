import React from "react";

const Button = ({ fetchArticles }) => {
  return (
    <button type="button" onClick={fetchArticles}>
      Load more
    </button>
  );
};

export default Button;
