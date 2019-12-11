import React from "react";
import { Switch, Route } from "react-router-dom";
import { Payment, Income, Home } from "./components";
import { Container } from "react-bootstrap";

export default () => {
  return (
    <Container>
      <Switch>
        <Route path="/income" component={Income} />
        <Route exact path="/" component={Home} />
        <Route path="/payment" component={Payment} />
      </Switch>
    </Container>
  );
};
