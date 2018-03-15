import initial from './initial';
import { Map, List } from "immutable";

let lastID = 2;

const createArticle = ({ title, article }) => {
    // up the ID by 1 every time
    lastID += 1;

    return Map({
        id: lastID,
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



const addArticle = (state, action) => state.update("articles", articles => articles.push(createArticle(action)));

const deleteArticle = (state, { id }) => {
   return state.update("articles", articles => articles.filter(a => a.get("id") !== id))
}

const editArticle = (state , { title, article, id }) => {
    return state.update("articles", articles => articles.map(a => (a.get("id") === id) ? 
            a.set("title", title).set("article", article) : a));
}

const addComment = (state, { email, comment, id }) => {
    return state.update("articles", articles => articles.map(a => (a.get('id') === id) ? 
        a.update("comments", comments => comments.push(createComment(email, comment))) : a ));
}

const reducer = (state, action) => {
    switch (action.type) {
        case "addArticle": return addArticle(state, action);
        case "deleteArticle": return deleteArticle(state, action);
        case "editArticle": return editArticle(state, action);
        case "addComment": return addComment(state, action);
        default: return state;
    }
}

export default reducer;