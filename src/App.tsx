import React from "react";
import { HashRouter as Router, Switch, Route, Link, Redirect } from "react-router-dom";
import styled from "styled-components";
import Nav from './components/Nav'

const Wrapper = styled.div`
  border: 1px solid red;
  display: flex;
  flex-direction: column;
  height: 100vh;
`;
const Main = styled.div`
  flex-grow: 1;
  overflow: auto;
`;

function App() {
  return (
    <Router>
      <Wrapper>
        <Main>
          <Switch>
            <Redirect exact from="/" to="/money" />
            <Route path="/tags">
              <Tags />
            </Route>
            <Route path="/money">
              <Money />
            </Route>
            <Route path="/statistics">
              <Statistics />
            </Route>
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
        </Main>
        <Nav />
      </Wrapper>
    </Router>
  );
}

function Tags() {
  return <h2>标签页面</h2>;
}

function Money() {
  return <h2>记账页面</h2>;
}

function Statistics() {
  return <h2>统计页面</h2>;
}

function NotFound() {
  return <h2>页面不存在</h2>;
}
export default App;
