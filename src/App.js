import logo from "./logo.svg";
import "./App.css";

import { Helmet } from "react-helmet";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Page1 />
          </Route>
          <Route path="/page2">
            <Page2 />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;

export const Page1 = () => (
  <div>
    <Helmet htmlAttributes>
      <html lang="en" />
      <meta charset="utf-8"></meta>
      <title>Este es el titulo de la pagina 1</title>
      <meta name="description" content="Description Page 1" />
      <link rel="icon" href={logo} sizes="32x32" />
    </Helmet>
    <h1>Este es el titulo de la pagina 1</h1>
    <Link to="/page2">ir a Pagina 2</Link>
  </div>
);

export const Page2 = () => (
  <div>
    <Helmet htmlAttributes>
      <html lang="en" />
      <meta charset="utf-8"></meta>
      <title>Este es el titulo de la pagina 2</title>
      <meta name="description" content="Page 2" />
      <link rel="icon" href={logo} sizes="32x32" />
    </Helmet>
    <h1>Este es el titulo de la pagina 2</h1>
    <Link to="/">ir a Pagina 1</Link>
  </div>
);
