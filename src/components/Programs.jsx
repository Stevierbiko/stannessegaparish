import SectionHead from "./SectionHead";
import { programs } from "../data";
import Card from "../UI/Card";
import { GiIronCross } from "react-icons/gi";
import { Link } from "react-router-dom";
import { AiFillCaretRight } from "react-icons/ai";
import {GiReceiveMoney} from "react-icons/gi"

const Programs = () => {
  return (
    <section className="programs">
      <div className="container programs__container">
        <SectionHead icon={<GiIronCross />} title="Worship With Us" />
        <p>When Mass Is Being Celebrated, The Sanctuary Is Filled With Countless Angels Who Adore The Divine Victim Immolated On The Altar.”
– St. John Chrysostom</p>

        <div className="programs__wrapper">
          {programs.map(({ id, icon, title, info, path }) => {
            return (
              <Card className="programs__program" key={id}>
                <span>{icon}</span>
                <h4>{title}</h4>
                <small>{info}</small>
                <Link to={path} className="btn sm">
                  Learn More <AiFillCaretRight />
                </Link>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Programs;
