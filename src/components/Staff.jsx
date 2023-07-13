import Card from '../UI/Card';

const Staff = ({ image, name, job, phone, socials }) => {
  return (
    <Card className="staff">
      <div className="staff__img">
        <img src={image} alt={name} />
      </div>
      <h3>{name}</h3>
      <p>{job}</p>
      <p>{phone}</p>
      <div className="staff__socials">
        {socials.map(({ icon, link }, index) => (
          <a key={index} href={link} target="_blank" rel="noreferrer noopener">
            {icon}
          </a>
        ))}
      </div>
    </Card>
  );
};

export default Staff;

