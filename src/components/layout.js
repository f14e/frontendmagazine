import React, { Fragment } from "react";
import Header from "components/Header/Header";
import { Content, Container } from "components/Layout/index";

const Layout = ({ children, location, title }) => (
  <Fragment>
    <Header location={location} title={title} />
    <Container>
      <Content>
        <main>{children}</main>
      </Content>
    </Container>
  </Fragment>
);

export default Layout;
