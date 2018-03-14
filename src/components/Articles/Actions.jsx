import React, { Component } from "react";
import { Link } from "react-router-dom";

// a component to show the Edit and Delete buttons
class Actions extends Component {
    constructor(props) {
        super(props);
        this.delete = this.delete.bind(this);
    }
	/* need to send back what article (id) is */
    delete(e){
    	const id = this.props.article.get("id");
    	this.props.onClick(id);
    }

    render() {
    	const { article } = this.props;
    	return (
		<div className="pull-right">
		    <Link to={ "/articles/" + article.get("id") + "/edit" } className="btn btn-info">
		        Edit Article
		    </Link>

		    { " " }

		    <button onClick={ this.delete }className="btn btn-danger">Delete Article</button>
		</div>
		)
	}
}

export default Actions;
