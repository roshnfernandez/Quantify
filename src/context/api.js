import axios from "axios";
import applicationConstants from '../assets/constants.json'

export class Api{
    
    postFile = async (formData) => {
        await axios.post(applicationConstants.apiHost + "/file",formData,{
            headers: {
                "Content-Type" : "multipart/form-data"
            }
        }).then((response)=>{console.log(response)});
    }
}