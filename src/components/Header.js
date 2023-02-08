const Header = ({ handleClick, disabledButton }) => {
  console.log(disabledButton);
  return (
    <section className="header wrapper">
      <h1 className="header__title">Unsplash Gallery</h1>
      <button
        className="header__btn"
        onClick={handleClick}
        disabled={disabledButton}
      >
        Cargar nuevas fotos
      </button>
    </section>
  );
};

export default Header;
