import { connect } from 'react-redux';
import Articles from "../components/Articles/Articles";
import { getArticles } from "../data/actions/api";

const mapStateToProps = state => {
    return {
        articles: state.get("titles"),
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onLoad: () => dispatch(getArticles()),
    };
};


export default connect(mapStateToProps, mapDispatchToProps)(Articles);