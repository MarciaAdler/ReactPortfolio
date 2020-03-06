import React from "react";
const styles = {
  card: {}
};
function PortfolioItems(props) {
  return (
    <div className="card" style={styles.card}>
      <div className="img-container">
        <img alt={props.name} src={props.image} />
      </div>
      <div className="content">
        <ul>
          <li>
            <strong>Name:</strong>
            {props.name}
          </li>
          <li>
            <strong>
              Click <a href={props.link}>Here</a> to view app
            </strong>
          </li>
          <li>
            <strong>
              Click <a href={props.github}>Here</a> to view repo on Github
            </strong>
          </li>
          <li>
            <strong>Description:</strong>
            {props.description}
          </li>
          <li>
            <strong>Technologies used:</strong>
            {props.technologies}
          </li>
        </ul>
      </div>
    </div>
  );
}

export default PortfolioItems;
