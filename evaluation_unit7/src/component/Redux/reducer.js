import { AUTH } from "./actionTypes"

const initialState ={
    name:'',
}


export const reducer=(store=initialState,action)=>{
switch(action.type){
    case AUTH:{
  return {...store,name:action.payload}
    }

    default :return store
}
}