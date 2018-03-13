import React from "react";

import {
    Route,
    Switch,
} from "react-router-dom";

import Header from "./components/Header";
import FourOhFour from "./components/FourOhFour";

import Articles from "./containers/Articles";
import Article from "./containers/Article";
import Add from "./components/Articles/Add";
import Edit from "./containers/Edit";

const App = () => (
    <div>
        { /* header should show on all pages */ }
        <Header subtitle="Very insightful">My Blog</Header>

        { /* route switch, to handle 404s */ }
        <Switch>
            { /* the articles list */ }
            <Route exact path="/" component={ Articles } />

            { /* edit page */}
            <Route exact path="/articles/edit/:id" render={ ({ match }) => (
                <Edit id={ match.params.id } />
            )} />
            
            { /* show the add form - has to come before :id so "add" doesn't get treated as an id  */ }
            <Route exact path="/articles/add" component={ Add } />

            { /* show an individual article */ }
            <Route exact path="/articles/:id" render={ ({ match }) => (
                <Article id={ match.params.id} />
            )} />

            { /* 404 page */}
            <Route component={ FourOhFour } />
        </Switch>

    </div>
);

export default App;
