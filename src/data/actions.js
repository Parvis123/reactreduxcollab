export const deleteArticle = (id) => {
	return {
        	type:"deleteArticle",
        	id : id,
    };
};

export const addArticle = ({ title, article, tags }) => {
    return {
        type: "addArticle",
        title: title,
        article: article,
        tags: tags,
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