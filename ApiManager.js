import axios from "axios";
const ApiManager=axios.create({
    baseURL:'http://13.126.41.109:8000',
    responseType:'json',
    withCredentials:true,
});
export default ApiManager;