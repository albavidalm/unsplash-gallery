// eslint-disable-next-line
import React, { useState, useEffect } from "react";
import getApiData from "./services/getApiData";
import Header from "./Header";
import Gallery from "./Gallery";

const GalleryApp = () => {
  const [infoPhoto, setInfoPhoto] = useState([]);

  useEffect(() => {
    getApiData().then((response) => {
      setInfoPhoto(response);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Header />
      <Gallery infoPhoto={infoPhoto} />
    </>
  );
};

export default GalleryApp;
