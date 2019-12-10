import React from "react";
import { Switch, Route } from "react-router-dom";
import { Home, Page } from "./components";
import { Container } from "react-bootstrap";

export default () => {
  return (
    <Container>
      <Switch>
        <Route path="/page" component={Page} />
        <Route exact path="/" component={Home} />
        <Route path="/home" component={Home} />
      </Switch>
    </Container>
  );
};
