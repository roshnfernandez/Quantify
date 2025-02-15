import axios from "axios";
import applicationConstants from '../assets/constants.json'

export class Api{
    
    postFile = async (formData, callBackFunction) => {
        await axios.post(applicationConstants.apiHost + "/file/upload",formData,{
            headers: {
                "Content-Type" : "multipart/form-data"
            }
        }).then((response)=>{callBackFunction(response.data)});
    }

    generateGraph = async (graphParam, callBackFunction) =>{
        await axios.post(applicationConstants.apiHost + "/file/generate" , graphParam).then((response)=>{
            console.log(response);
            callBackFunction(response.data)});
    }
}