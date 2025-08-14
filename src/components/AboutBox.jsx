const AboutBox = (props) => {
  return (
    <div className={`box ${props.reverse ? "reverse" : ""}`}>
      <div className="left" data-aos="fade-up">
        <h3>{props.title}</h3>
        <p>{props.desc}</p>
      </div>
      <div className="right" data-aos="fade-up">
        <img src={props.img} alt={props.title} />
      </div>
    </div>
  );
};

export default AboutBox;
