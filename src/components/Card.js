const Card = ({ infoPhoto }) => {
  const info = () => {
    return infoPhoto.map((photo) => {
      return (
        <li key={photo.id} className="card">
          <img
            className="card__img"
            src={photo.imgUrl}
            alt={photo.imgDescription}
          ></img>
          <h2 className="card__description wrapper">{photo.imgDescription}</h2>
          <h2 className="card__author wrapper">{photo.author}</h2>
        </li>
      );
    });
  };
  return info();
};
export default Card;
