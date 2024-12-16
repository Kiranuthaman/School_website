import { commonApi } from "./commonApi";
import { serverUrl } from "./serverURL";


export const getStudentApi = async ()=>{
    return await commonApi (('GET',`${serverUrl}/students`,""))
}