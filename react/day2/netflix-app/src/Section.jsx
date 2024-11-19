function Section({ category, images }) {
  return (
    <div className="container">
      <p className="title">{category}</p>
      <div className="movies-list">
        {images.map((img) => {
          return <img key={img} alt="movie" src={img} />;
        })}
      </div>
    </div>
  );
}

export default Section;
