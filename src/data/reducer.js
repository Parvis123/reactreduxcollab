//import initial from './initial';
import { Map, List } from "immutable";


const createArticle = ({ title, article, id }) => {

    return Map({
        id: id,
        title: title,
        article: article,
        comments: List(),
        tags: List(),
    });
};

const createComment = (email, comment) => {
    return Map({
        email: email,
        comment: comment,
    });
};



const addArticle = (state, action) => state.update("articles", articles => articles.set(action.id, createArticle(action)));

const removeArticle = (state, { id }) => state.update("articles", articles => articles.delete(id));


const editArticle = (state , { title, article, tags, id }) => {
    return state.update("articles", articles => articles.map(a => (a.get("id") === id) ? 
            a.set("title", title).set("article", article).set("tags", tags) : a));
}

const addComment = (state, { email, comment, id }) => {
    return state.update("articles", articles => articles.map(a => (a.get('id') === id) ? 
        a.update("comments", comments => comments.push(createComment(email, comment))) : a ));
}

const setArticles = (state, { articles }) => state.set("titles", articles);

const setArticle = (state, { article }) => state.update("articles", articles => articles.set(article.get("id"), article.set("comments", List())));

const reducer = (state, action) => {
    switch (action.type) {
        case "addArticle": return addArticle(state, action);
        case "removeArticle": return removeArticle(state, action);
        case "editArticle": return editArticle(state, action);
        case "addComment": return addComment(state, action);
        case "setArticles": return setArticles(state, action); 
        case "setArticle": return setArticle(state, action); 
        default: return state;
    }
}

export default reducer;