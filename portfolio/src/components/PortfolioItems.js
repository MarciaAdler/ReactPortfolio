import React from "react";
const styles = {
  card: {
    width: "200px"
  }
};
function PortfolioItems() {
  return (
    <div className="card" style={styles.card}>
      <img src="..." className="card-img-top" alt="..." />
      <div className="card-body">
        <p className="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
      </div>
    </div>
  );
}

export default PortfolioItems;
