import React from "react";
import ImageGaleeryItem from "../imageGalleryItem/ImageGalleryItem";

const ImageGallery = ({ hits, getImage }) => {
  return (
    <ul className="ImageGallery">
      {hits.map(({ id, webformatURL, largeImageURL }) => (
        <ImageGaleeryItem
          key={id}
          webformatURL={webformatURL}
          largeImageURL={largeImageURL}
          getImage={getImage}
        />
      ))}
    </ul>
  );
};
export default ImageGallery;
