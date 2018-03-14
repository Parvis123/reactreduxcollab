import { connect } from "react-redux";
import Edit from "../components/Articles/Edit";
import { editArticle } from "../data/actions";


// the second argument passed to mapStateToProps represent the props passed in from the parent
const mapStateToProps = (state, { id }) => {
    const articles = state.get("articles");
    const article = articles.find(a => a.get("id") === +id);
    let fields = [];
    if (article) {
	    const title = article.get("title");
	    const body = article.get("article");
	    const tags = article.get("tags").join(" ");
		// the fields the form should have
		fields = [
		    { name: "title", label: "Title", value: title },
		    { name: "article", label: "Article", value: body },
		    { name: "tags", label: "Tags", value: tags},
		];
	}
	else {
		fields = null;
	}

    return {
        fields: fields,
        id: id,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onSubmit: (data, id) => dispatch(editArticle(data, id)),
    };
};

// connect up mapStateToProps with the Article component
// Article's props are now controlled by this file
export default connect(mapStateToProps, mapDispatchToProps)(Edit);