import { Map, List } from "immutable";

// create some dummy articles
const initial = Map({
    articles: List([
            Map({
        id: 1,
        title: "Post #1",
        article: "<p>Blah blah blah</p>",
        comments: List([
            Map({ email: "bob@bob.com", comment: "Great blog post" }),
        ]),
        tags: List(["blah", "monkeys"]),
    }),
    Map({
        id: 2,
        title: "Post #2",
        article: "<p>Blah blah blah</p>",
        comments: List([
            Map({ email: "sandi@sandi.com", comment: "I disagree, but not in an agressive and unpleasant manner" }),
        ]),
        tags: List(["blah", "fish-fingers"]),
    }),
    ]),
});

export default initial;