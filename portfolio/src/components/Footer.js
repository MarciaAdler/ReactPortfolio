import React from "react";
const styles = {
  footer: {
    backgroundColor: "white",
    height: "50px",
    position: "fixed",
    clear: "both",
    width: "100%",
    bottom: "0",
    paddingTop: "15px"
  }
};
function Footer() {
  return <footer style={styles.footer}>copyright</footer>;
}

export default Footer;
