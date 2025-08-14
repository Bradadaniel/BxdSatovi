const BlogComponent = ({ date, title, text, img }) => {
  return (
    <>
      <div className="date">{date}</div>
      <div className="boxContent">
        <div className="img">
          <img src={img} alt={title} />
        </div>
        <div className="letter">
          <h3>{title}</h3>
          <p>{text}</p>
        </div>
      </div>
    </>
  );
};

export default BlogComponent;
