import React, { Component } from "react";
import PropTypes from "prop-types";

import classes from "./BurgerIngredients.css";

class BurgerIngredient extends Component {
  render() {
    let ingredient = null;

    switch (this.props.type) {
      case "bread-bottom": //rendering the bread-bottom
        ingredient = <div className={classes.BreadBottom} />;
        break;
      case "bread-top": //rendering the bread-top
        ingredient = (
          <div className={classes.BreadTop}>
            <div className={classes.Seeds1} />
            <div className={classes.Seeds2} />
          </div>
        );
        break;
      case "meat":
        ingredient = <div className={classes.Meat} />;
        break;
      case "cheese":
        ingredient = <div className={classes.Cheese} />;
        break;
      case "bacon":
        ingredient = <div className={classes.Bacon} />;
        break;
      case "salad":
        ingredient = <div className={classes.Salad} />;
        break;
      default:
        ingredient = null;
    }

    return ingredient;
  }
}

BurgerIngredient.propTypes = {
  //gives an error is the props being passed is/are not a string or if props are not provided.
  type: PropTypes.string.isRequired
};

export default BurgerIngredient;
