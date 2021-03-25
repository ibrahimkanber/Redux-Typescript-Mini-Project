import { Action } from './../actions/index';
import { ActionType } from './../action-types/index';
import axios from "axios"
import {Dispatch} from "redux"

export const searchRepositories=(term:string)=>{

    return async(dispatch:Dispatch<Action>)=>{
        dispatch({
            type:ActionType.SEARCH_REPOSITORIES
        })

        try {
            const {data}=await axios.get("https://registery.npm.org/-/v1/search",{
                params:{
                    text:term
                }
            })

            const names=data.objects.map((res:any)=>{
                return res.package.name
            })

            dispatch({
                type:ActionType.SEARCH_REPOSITORIES_SUCCESS,
                payload:names
            })

        } catch (error) {
            dispatch({
                type:ActionType.SEARCH_REPOSITORIES_ERROR,
                payload:error.message
            })
    
        }
    }
}