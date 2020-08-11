import React from "react";
import PropTypes from "prop-types";
import Button from "./Button";
import Container from "../layouts/Container";
import Item from "../layouts/Item";

const Header = ({ showAddToggle, showAdd, clearTodos }) => {
  return (
    <section className="header-component">
      <Container alignItems="flex-start">
        <Item flex="1">
          <Button text={showAdd ? "Finish" : "Add"} onClick={showAddToggle} />
        </Item>
        <Item flex="2">
          <h1 className="header-title">Todo List</h1>
        </Item>
        <Item flex="1" align="right">
          <Button text="Clear" color="red" onClick={clearTodos} />
        </Item>
      </Container>
    </section>
  );
};

Header.propTypes = {
  showAddToggle: PropTypes.func.isRequired,
  showAdd: PropTypes.bool.isRequired,
  clearTodos: PropTypes.func.isRequired
};

export default Header;
