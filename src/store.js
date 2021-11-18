import {createStore} from 'redux';

const initialState = {
    matches: [
      {
        full_name: 'Zerok24',
        description: 'This is Bunguius blog repostiory ',
        html_url: 'https://github.com/Zerok24/blog',
      },
    ],
  };


function reducer(state) {
    return state;
}
  
export const store = createStore(reducer, initialState);

