import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import List from "../view/common/List";
import MyList from "../view/common/MyList";

export default class Routes extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Route path="/" component={MyList} exact={true} />
          <Route path="/MyList" component={MyList} exact={true} />
          <Route path="/List" component={List} exact={true} />
        </div>
      </BrowserRouter>
    );
  }
}
