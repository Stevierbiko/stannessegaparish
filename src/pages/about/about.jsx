import Header from "../../components/Header";
import HeaderImage from "../../image/banner.jpg";
import StoryImage from "../../image/about1.jpeg";
import VisionImage from "../../image/bishop2.jpg";
import MissionImage from "../../image/about2.jpeg";

import "./about.css";

function about() {
  return (
    <>
      <Header title="About Us" image={HeaderImage}>
        Our mandate as the Church is to promote spiritual growth and social
        development. (Proclaim the Gospel to the whole World.)
      </Header>

      <section className="about__story">
        <div className="container about__story-container">
          <div className="about__section-image">
            <img src={StoryImage} alt="Story Image" />
          </div>
          <div className="about__section-content">
            <h1>Our Story</h1>
            <p>
              St. Anne’s Sega Catholic Parish was established in 1931 at Sihay
              centre by Mill Hill Missionaries led by Fr. Vergman to reduce
              distance travelled by faithfuls to Rangala Parish. In addition to
              establishing the church, the missionaries also established a
              school to introduce formal education to the local faithfuls.
            </p>
            <p>
              Due to unfavourable weather conditions in Sihay. In 1922, the
              church moved to its present location at Sega Centre in North
              Ugenya Ward, Ugenya Sub County of Siaya County. Since
              establishment, Ukwala, Yogo and Mban Parishes that were initially
              sub parishes of Sega are now stand alone parishes. Currently, the
              Parish has an estimated population of 4,000 Christians served by 9
              Sub Parishes with 88 Small Christian Communities.
            </p>
            <p>
              To ensure wholesome spiritual and social development the church
              also established a mission complex with 2 secondary schools and 2
              primary schools a hospital and a vocational training Centre.
              Moreover, the church also sponsors 18 more primary schools and 2
              secondary schools within its jurisdiction. From inception to date,
              the Parish has been served by 25 Priests 11 catechists and
              mentored 15 Priests and 10 Sisters who are now serving in various
              parishes and institutions.
            </p>
          </div>
        </div>
      </section>

      <section className="about__vison">
        <div className="container about__vision-container">
          <div className="about__section-content">
            <h1>Our Vision</h1>
            <p>
              A parish that is inspired by the Gospel and Nourished by the
              Eucharist that is actively visible in the community.
            </p>
            <p>The vision we have calls the church to:</p>
            <p>
              Act collaboratively and consistently on vital issues confronting
              the Church and society
            </p>
            Foster communion with the Christian community, within the Church
            universal, under the leadership of its supreme pastor, the Roman
            Pontiff
            <p>
              Offer appropriate assistance to each christian in fulfilling their
              particular ministry
            </p>
          </div>
          <div className="about__section-image">
            <img src={VisionImage} alt="Vision Image" />
          </div>
        </div>
      </section>

      <section className="about__mission">
        <div className="container about__mission-container">
          <div className="about__section-image">
            <img src={MissionImage} alt="Mission Image" />
          </div>
          <div className="about__section-content">
            <h1>Our Mission</h1>
            <p>
              To promote holistic and sustainable development of the human
              person through facilitation of pastoral and socio-economic
              empowerment programmes
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default about;
