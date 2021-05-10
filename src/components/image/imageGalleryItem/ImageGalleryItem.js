import React from "react";

const ImageGalleryItem = ({ webformatURL, largeImageURL, getImage }) => {
  const getImg = () => {
    getImage(largeImageURL);
  };
  return (
    <li className="ImageGalleryItem">
      <img
        src={webformatURL}
        alt=""
        className="ImageGalleryItem-image"
        onClick={getImg}
      />
    </li>
  );
};
export default ImageGalleryItem;
