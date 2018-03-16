export const removeArticle = (id) => {
	return {
        	type:"removeArticle",
        	id : id,
    };
};

export const addArticle = ({ title, article, tags, id }) => {
    return {
        type: "addArticle",
        title: title,
        article: article,
        tags: tags,
        id: id,
    };
};

export const editArticle = ({ title, article, tags }, id) => {
	return {
		type:"editArticle",
		title: title,
		article: article,
        tags: tags,
		id: id,
	};
};

export const addComment = ({ email, comment }, id) => {
    return {
        type:"addComment",
        email: email,
        comment: comment,
        id: id,
    };
};

export const setArticles = articles => {
    return {
        type: "setArticles",
        articles: articles,
    };
};

export const setArticle = article => {
    return {
        type: "setArticle",
        article: article,
    };
};