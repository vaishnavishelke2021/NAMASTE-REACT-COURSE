import "./About.css";
import User from "./User";

const About = () => {
  return (
    <div className="py-[40px] px-[230px]">
      <h1>About</h1>
      <User name={"Vaishnavi Shelke"} location={"Maharashtra"} />
    </div>
  );
};

export default About;
