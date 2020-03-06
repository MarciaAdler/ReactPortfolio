import React, { Component } from "react";
import PortfolioItems from "../components/PortfolioItems";
import portfolioitems from "../portfolioitems.json";

class Portfolio extends Component {
  state = {
    portfolioitems
  };

  render() {
    return (
      <div className="container mt-5">
        <h1>Portfolio</h1>
        <hr />
        {this.state.portfolioitems.map(item => (
          <PortfolioItems
            key={item.id}
            name={item.name}
            image={item.image}
            link={item.link}
            github={item.github}
            description={item.description}
            technologies={item.technologies}
          />
        ))}
      </div>
    );
  }
}
export default Portfolio;
