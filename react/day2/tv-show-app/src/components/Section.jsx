function Section({ duration, image, time, title, type, direct, exclusive }) {
  return (
    <div className="tv-item">
      <p>{time}</p>
      <img src={image} alt="" />
      <div>
        <p>{title}</p>
        <p>{type}</p>
        <div>
          <p>{duration}</p>
          {direct && <p>En direct</p>}
          {exclusive && <p>Inédit</p>}
        </div>
      </div>
    </div>
  );
}

export default Section;
