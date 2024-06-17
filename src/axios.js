import axios from "axios";

axios.defaults.withCredentials = true;
axios.defaults.withXSRFToken = true;



export default axios;
