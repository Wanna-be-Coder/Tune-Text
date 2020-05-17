import React, { useEffect, Fragment } from "react";
import "./App.css";
import "materialize-css/dist/css/materialize.min.css";
import M from "materialize-css/dist/js/materialize.min.js";
import NavBar from "./component/layout/NavBar";
import Search from "./component/Search/Search";
import { Provider } from "react-redux";
import store from "./store";

const App = () => {
  useEffect(() => {
    //Init Materializze JS
    M.AutoInit();
  }, []);
  return (
    <Provider store={store}>
      <Fragment>
        <NavBar name={"Tune & Text"} />
        <div className='container'>
          <Search />
        </div>
      </Fragment>
    </Provider>
  );
};

export default App;
