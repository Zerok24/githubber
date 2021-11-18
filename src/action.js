import { Repository } from './Repository';
import { useState } from 'react';

function assertResponse(response) {
    if (response.status >= 200 || response.status < 300) {
      return response;
    } else {
      throw new Error(`${response.status}: ${response.statusText}`);
    }
}

//will search all gitHubs for given word
function loadMatches(x){
    return {type: bindActionCreators.loadMatches, payload:x}
}

function startSearching(word){
    url = "https://api.github.com/search/repositories?q=word"
    return dispatch => {
        fetch(word)
        .then(assertResponse)
        .then(respnse => response.json)
        .then(data => {
            if(data.ok){
                dispatch(/*idk*/) //the search would go here
            }else{
                console.error(data)
            }
        })
    }
}