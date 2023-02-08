// eslint-disable-next-line
import React, { useState, useEffect } from "react";
import getApiData from "./services/getApiData";
import Header from "./Header";
import Gallery from "./Gallery";
import Footer from "./Footer";

const GalleryApp = () => {
  const [infoPhoto, setInfoPhoto] = useState([]);
  const [page, setPage] = useState(1);
  const [disabledButton, setDisabledButton] = useState(false);

  const randomPage = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  useEffect(() => {
    getApiData(page).then((response) => {
      setInfoPhoto(response);
      setPage(randomPage(2, 1000));
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleClick = () => {
    setDisabledButton(true);
    setPage(randomPage(2, 1000));
    getApiData(page).then((infoPhoto) => {
      setInfoPhoto(infoPhoto);
      setDisabledButton(false);
    });
  };

  return (
    <>
      <Header
        handleClick={handleClick}
        disabledButton={disabledButton}
        randomPage={randomPage(2, 10)}
      />
      <Gallery infoPhoto={infoPhoto} />
      <Footer />
    </>
  );
};

export default GalleryApp;
