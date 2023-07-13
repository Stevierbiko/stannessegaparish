import {Link} from "react-router-dom"
import NotFoundImage from "../../image/st-anthony-404.png";
import  './notFound.css'

function notFound() {
  return (
    
    <div className="container notfound__container">
      <h2>Oops! Page not found</h2>
      <div className="notfound-image">
            <img src={NotFoundImage} alt="st-anthony-404 Image "/>
          </div>
      <Link to="/" className="btn">Go back to homepage</Link>
    </div>
  )
}

export default notFound