import { connect } from 'react-redux';
import Articles from "../components/Articles/Articles";

const mapStateToProps = (state, { tag }) => {
    return {
        articles: state.get("articles").filter(a => a.get("tags").some(t => t === tag))
    };
};

export default connect(mapStateToProps)(Articles);