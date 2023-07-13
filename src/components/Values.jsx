import Image from "../image/Parish1.jpeg"
import SectionHead from "./SectionHead"
import { GiCutDiamond } from "react-icons/gi"
import {values} from "../data"
import Card from "../UI/Card"

const Values = () => {
  return (
    <section className="values">
      <div className="container value__container">
        <div className="value__left">
          <div className="values__image">
            <img src={Image} alt="Value Image" />
          </div>
        </div>
        <div className="value__right">
          <SectionHead icon={ GiCutDiamond } title= "Our Core Values"></SectionHead>
          <p>The Church's social teaching is a rich treasure of wisdom about building a just society and living lives of holiness amidst the challenges of modern society. Modern Catholic social teaching has been articulated through a tradition of papal, conciliar, and episcopal documents. The depth and richness of this tradition can be understood best through a direct reading of these documents. In these brief reflections, we highlight several of the key themes that are at the heart of our Catholic social tradition.</p>
          <div className="value__warapper">
            {
              values.map(({id, icon, title, desc})=>{
                return <Card key={id} className="values__value">
                  <span>{icon}</span>
                  <h4>{title}</h4>
                  <small>{desc}</small>
                </Card>
              })
            }
          </div>
        </div>
      </div>
    </section>
  )
}

export default Values