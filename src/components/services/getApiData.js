const getApiData = (page) => {
  const apiKey = "NDmA0Jtl_iAxlQ_3_9Np7D-29kJmftTNRAUV4ZIQcAM";
  return fetch(
    `https://api.unsplash.com/photos?client_id=${apiKey}&per_page=13&page=${page}`
  )
    .then((response) => response.json())
    .then((data) => {
      const cleanData = data.map((photo) => {
        return {
          id: photo.id,
          imgUrl: photo.urls.regular,
          imgUrlRaw: photo.urls.raw,
          imgDescription: photo.description
            ? photo.alt_description
            : "Without title",
          author: photo.user.name,
        };
      });

      return cleanData;
    })
    .catch((err) => console.error(err));
};
export default getApiData;
