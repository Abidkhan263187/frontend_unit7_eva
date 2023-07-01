import { AUTH } from "./actionTypes"


export const authenticate=(payload)=>{
 return {
    type:AUTH,
    payload
 }
}