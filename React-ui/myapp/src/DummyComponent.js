import React from "react";
import { Route } from "react-router-dom";

const About = () => {
  return <h1>About Page</h1>;
};

const Home = () => {
  return <h1>Home Page</h1>;
};

const Contact = () => {
  return <h1>Contact Page</h1>;
};

const SignIn = () => {
  return <h1>Sign In Page</h1>;
};

export const DummyComponents = () => {
  return (
    <>
      <Route path="/about" component={About} />
      <Route path="/" exact component={Home} />
      <Route path="/contact" component={Contact} />
      <Route path="/signin" component={SignIn} />
    </>
  );
};
