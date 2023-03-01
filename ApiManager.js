import axios from "axios";
const ApiManager=axios.create({
    baseURL:'http://geyeapp.consultit.co.in:8000',
    responseType:'json',
    withCredentials:true,
});
export default ApiManager;