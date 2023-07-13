import Card from "../UI/Card";

const Parish = ({ image, name, job }) => {
  return (
    <Card className="staff">
      <div className="staff__img">
        <img src={image} alt={name} />
      </div>
      <h3>{name}</h3>
      <p>{job}</p>
    </Card>
  );
};

export default Parish;
