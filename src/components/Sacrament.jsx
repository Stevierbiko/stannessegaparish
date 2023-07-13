import Card from "../UI/Card";

import { sacraments } from "../data";

const Sacrament = () => {
  return (
    <section className="programs">
      <div className="container programs__container">
        <p>
          Christ instituted the sacraments of the new law. There are seven:
          Baptism, Confirmation (or Chrismation), the Eucharist, Penance, the
          Anointing of the Sick, Holy Orders and Matrimony. The seven sacraments
          touch all the stages and all the important moments of Christian life:
          they give birth and increase, healing and mission to the Christian's
          life of faith. There is thus a certain resemblance between the stages
          of natural life and the stages of the spiritual life. Catechism of the
          Catholic Church, paragraph 1210
        </p>
        <div className="programs__wrapper">
          {sacraments.map(({ id, icon, title, info, path }) => {
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

export default Sacrament;
