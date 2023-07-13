import Card from "../UI/Card";

import { liturgy } from "../data";

const Liturgy = () => {
  return (
    <section className="programs">
      <div className="container programs__container">
        <p>
          When the Church comes together in the liturgical assembly to celebrate
          the Mass, or any other sacrament, her members do not gather simply as
          a crowd, as an amorphous, undifferentiated group of people. They
          gather in a variety of ministries and roles. If we are to understand
          the significance of these ministries and roles, we must begin with
          Baptism, for only one who through Baptism has been given a share in
          the priesthood of Christ is capable of participating in the public
          worship which is the liturgy of the Church. In fact, the Constitution
          on the Sacred Liturgy of the Second Vatican Council tells us that
          participation in the liturgy is the right and duty of all the
          baptized.
        </p>
        <div className="programs__wrapper">
          {liturgy.map(({ id, icon, title, info, path }) => {
            return (
              <Card className="programs__program" key={id}>
                <span>{icon}</span>
                <h4>{title}</h4>
                <small>{info}</small>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Liturgy;
