import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/styles";

const Container = ({
  children,
  direction,
  wrap,
  justifyContent,
  alignItems,
  alignContent
}) => {
  const useStyles = makeStyles({
    flexContainer: {
      display: "flex",
      flexDirection: direction,
      flexWrap: wrap,
      justifyContent: justifyContent,
      alignItems: alignItems,
      alignContent: alignContent
    }
  });
  const classes = useStyles();
  return <div className={classes.flexContainer}>{children}</div>;
};

Container.defaultProps = {
  direction: "row",
  wrap: "no-wrap",
  justifyContent: "flex-start",
  alignItems: "stretch",
  alignContent: "stretch"
};

Container.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]),
  direction: PropTypes.oneOf([
    "row",
    "row-reverse",
    "column",
    "column-reverse"
  ]),
  wrap: PropTypes.oneOf(["no-wrap", "wrap", "wrap-reverse"]),
  justifyContent: PropTypes.oneOf([
    "flex-start",
    "flext-end",
    "center",
    "space-between",
    "space-around",
    "space-evenly",
    "start",
    "end",
    "left",
    "right"
  ]),
  alignItems: PropTypes.oneOf([
    "stretch",
    "flex-start",
    "flex-end",
    "center",
    "baseline",
    "first baseline",
    "last baseline",
    "start",
    "end",
    "self-start",
    "self-end"
  ]),
  alignContent: PropTypes.oneOf([
    "stretch",
    "flex-start",
    "flex-end",
    "center",
    "space-between",
    "space-around",
    "space-evenly",
    "start",
    "end",
    "baseline",
    "first baseline",
    "last baseline"
  ])
};

export default Container;
