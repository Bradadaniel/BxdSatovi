const HomeItemsComponent = (props) => {
  return (
    <div className="item">
      <div className="img">
        <img src={props.image} alt={props.subtitle} />
        <div className="heart">
          <i className="ri-heart-fill"></i>
        </div>
      </div>
      <div className="desc">
        <h3>{props.subtitle}</h3>
        <h5>{props.price},00 RSD</h5>
      </div>
    </div>
  );
};

export default HomeItemsComponent;
