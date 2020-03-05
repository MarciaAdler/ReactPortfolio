import React from "react";

const styles = {
  display: {
    marginTop: "40px",
    fontSize: "50px"
  },
  mainContent: {
    fontSize: "20px",
    backgroundColor: "lightgrey",
    height: "60vh"
  }
};
function Contact() {
  return (
    <div className="wrapper" style={styles.display}>
      <div className="container" style={styles.mainContent}>
        <h1>Contact</h1>
        <hr />
        <section>
          <li>
            <a href="https://www.linkedin.com/in/marciaadler/">LinkedIn</a>
          </li>
          <li>
            <a href="https://github.com/MarciaAdler">GitHub</a>
          </li>
        </section>
      </div>
    </div>
  );
}
export default Contact;
