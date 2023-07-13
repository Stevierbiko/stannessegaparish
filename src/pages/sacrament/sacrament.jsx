import Sacrament from "../../components/Sacrament";
import Header from "../../components/Header";
import HeaderImage from "../../image/banner5.jpg";



const sacrament = () => {
  return (
    <>
    <Header title="Sacrament and Sacramentals" image={HeaderImage}>
    Signs of God's grace in our lives
    </Header>
    
    
      <Sacrament />
    </>
  );
};

export default sacrament;
