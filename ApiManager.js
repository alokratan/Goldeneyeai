import axios from "axios";
const ApiManager=axios.create({
    baseURL:'http://13.232.193.117:8000',
    responseType:'json',
    withCredentials:true,
});
export default ApiManager;