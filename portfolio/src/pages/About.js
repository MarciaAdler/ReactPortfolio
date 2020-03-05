import React from "react";
import me from "../images/me.jpeg";

const styles = {
  image: {
    height: "200px",
    textAlign: "left"
  }
};
function About() {
  return (
    <div className="container mt-5">
      <h1>About</h1>
      <hr />
      <img style={styles.image} src={me} alt="Marcia" />
    </div>
  );
}
export default About;
