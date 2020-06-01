import axios from "axios"
 import {BASE_URL} from "./../config/env"



 const getFullURL=(url)=>{
     return `${BASE_URL}${url}`
 }

 const commonFetch = (request)=>{
     const {subUrl,method,data={},params}=request;
  const url = getFullURL(subUrl);
  return axios({method,url,params,data})
 }

 export const get=(request)=>{
     return commonFetch({method:'get',...request})
 }


 export const getIssues=(subUrl)=>{
     const res= get({subUrl});
    //  console.log(res)
     return res
 }
  
 export const fetchIssues = (subUrl)=>{
     let issuePromise = getIssues(subUrl)
     return {
        issues:wrapPromise(issuePromise)
     };

 }
const wrapPromise = (promise)=>{
    let status= 'pending';
    let result;
    let suspender = promise.then(res=>{
        status="success";
        result=res.data;
    },
    error=>{
        status="error";
        result=error
    });
    return {
        read (){
            console.log("readdd")
            if (status === "pending") {
                throw suspender;
              } else if (status === "error") {
                  console.log("error")
                throw result;
              } else if (status === "success") {
                  console.log("succ")
                return result;
              }
        }
    }

}

