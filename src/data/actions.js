export const deleteArticle = (id) => {
	return {
        	type:"deleteArticle",
        	id : id,
    };
};

export const addArticle = ({ title, article }) => {
    return {
        type: "addArticle",
        title: title,
        article: article,
    };
};

export const editArticle = ({ title, article }, id) => {
	return {
		type:"editArticle",
		title: title,
		article: article,
		id: id,
	};
};