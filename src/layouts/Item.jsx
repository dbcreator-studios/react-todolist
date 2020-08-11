import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/styles";

const Item = ({ children, flex, align }) => {
  const useStyles = makeStyles({
    flexItems: {
      flex: flex,
      textAlign: align
    }
  });
  const classes = useStyles();
  return <div className={classes.flexItems}>{children}</div>;
};

Item.defaultProps = {
  align: "left"
};

Item.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]),
  flex: PropTypes.string,
  align: PropTypes.oneOf(["center", "left", "right", "justify"])
};

export default Item;
