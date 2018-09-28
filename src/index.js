import React from "react";
import { render } from "react-dom";
import NavMenu from "./Navbar";
import Mylist from "./data";

const App = () => <NavMenu navlist={Mylist} />;

render(<App />, document.getElementById("root"));
