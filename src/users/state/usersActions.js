import * as types from "./actionTypes"
import axios from "axios"

export const getUser = (dispatch,userName) => {
    (async () => {
        try{
            const response = await axios.get(
                `https://api.github.com/users/${userName}`, {
                    headers:{
                        'Authorization': `token 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`
                    }
                }
            );
            dispatch({
                type: types.GET_SEARCHED_USER,
                payload: response.data
            })
        } catch(err){
            console.log(err)
        }
    })();
}

export const getUserRepo = (dispatch,userName) => {
    (async () => {
        try{
            const response = await axios.get(
                `https://api.github.com/users/${userName}/repos`, {
                    headers:{
                        'Authorization': `token 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`
                    }
                }
            );
            
            dispatch({
                type: types.GET_USER_REPO,
                payload: response.data
            })
        } catch(err){
            console.log(err)
        }
    })();
}

export const getUserGists = (dispatch,userName) => {
    (async () => {
        try{
            const response = await axios.get(
                `https://api.github.com/users/${userName}/gists`, {
                    headers:{
                        'Authorization': `token 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`
                    }
                }
            );
            
            dispatch({
                type: types.GET_USER_GISTS,
                payload: response.data
            })
        } catch(err){
            console.log(err)
        }
    })();
}

export const getUserStar = (dispatch,userName) => {
    (async () => {
        try{
            const response = await axios.get(
                `https://api.github.com/users/${userName}/starred`, {
                    headers:{
                        Authorization: `token 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`
                    }
                }
            );
            
            dispatch({
                type: types.GET_USER_STAR,
                payload: response.data
            })
        } catch(err){
            console.log(err)
        }
    })();
}

export const searchUsers = (dispatch,query) => {
    (async () => {
      try{
          const response = await axios.get(
              `https://api.github.com/search/users?q=${query}`, {
                  headers:{
                      Authorization: `token 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`
                  }
              }
          );
        
          dispatch({
            type: types.GET_SEARCH,
            payload: response.data.items
        })
      } catch(err){
          console.log(err)
      }
      
  })();
  
  }