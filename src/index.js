import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import reducer from "./data/reducer";
import initial from "./data/initial";
import { Provider } from "react-redux";


// import the Router component
import { BrowserRouter as Router } from "react-router-dom";

// import the App component
import App from "./App";

// import in Immutable Map and List for our dummy data
import { Map, List } from "immutable";

const store = createStore(
    reducer,
    initial,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);





// wrap the app in Router
// pass our articles through to App using props
ReactDOM.render(
    <Provider store={ store }>
        <Router>
            <App />
        </Router>
    </Provider>,
    document.getElementById("root"),
);
