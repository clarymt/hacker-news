import axios from "axios";

export function actionResults(){
    return (dispatch) => {
        return axios.get('http://hn.algolia.com/api/v1/search?query=foo&tags=story').then((response)=>{
            // dispatch(searchResults(response.data))
            console.log(response)
        })
    }
}