// import our axios config file
import axios from "../../axios";
import { fromJS } from "immutable";
import { setArticles, addArticle, setArticle, removeArticle, editArticle } from "./state";

export const getArticles = () => dispatch => {
    axios.get("/articles").then(response => {
    	// wrap the response.data with fromJS to convert it into an Immutable List
        const articles = fromJS(response.data);
        // dispatch the setArticles action, passing along the articles List
        dispatch(setArticles(articles));
    });
};

export const getArticle = (id) => dispatch => {
	axios.get("/articles/" + id).then(response => {
		const article = fromJS(response.data);
		dispatch(setArticle(article));
	});
};

export const postArticle = (data) => dispatch => {
	//post article data
	axios.post("/articles", {
		title: data.title,
		article: data.article,
		tags: data.tags.split(", "),
	}).then(response => {
		const article = fromJS(response.data);
		// dispatch the addArticle action, passing along the article Map
		dispatch(addArticle(article));
	});
};

export const deleteArticle = (id) => dispatch => {
	axios.delete("/articles/" + id).then(() => {
		dispatch(removeArticle(id));
	});
};

export const putArticle = ({ title, article, tags }, id) => dispatch => {
	axios.put("/articles" + id, {
			title: title,
			article: article,
			tags: tags,
		}).then(response => {
			const article = fromJS(response.data);
			dispatch(editArticle(article));
		});
};



