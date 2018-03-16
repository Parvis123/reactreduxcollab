import axios from "axios";

// create a version of axios with useful defaults
export default axios.create({
    // use your own url
    baseURL: "http://james.restful.training/api/",

    // use your own key
    params: {"key": "092426f85a8048eb69c6c65da141f69e9bc6a5d3"},
    
    // make sure we get JSON back
    headers: {"Accept": "application/json"},
});