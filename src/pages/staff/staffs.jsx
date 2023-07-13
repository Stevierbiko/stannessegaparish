import Header from "../../components/Header";
import HeaderImage from "../../image/banner.jpg";
import { staff } from "../../data";
import { FaFacebook } from "react-icons/fa";
import { AiOutlineTwitter } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import Staff from "../../components/Staff";

import "./staffs.css";

const Staffs = () => {
  return (
    <>
      <Header title="Meet Our Team" image={HeaderImage}>
      "The parish office should be a microcosm of what we want the whole parish to be."
Patrick Lencioni
      </Header>
      <section className="staffs">
        <div className="container staffs__container">
          {staff.map(({ id, image, name, job, socials }) => {
            return (
              <Staff
                key={id}
                image={image}
                name={name}
                job={job}
                socials={[
                  { icon: <AiFillInstagram />, link: socials[0] },
                  { icon: <AiOutlineTwitter />, link: socials[1] },
                  { icon: <FaFacebook />, link: socials[2] },
                  { icon: <AiFillLinkedin />, link: socials[3] },
                ]}
              />
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Staffs;
