import React from 'react';


export function Repository(props){

    const {match} = props;
    // console.log(match);

    return(
        <div>
            <ul>
                <p><a href={match.html_url}>{match.full_name}</a></p>
                <p>{match.description}</p>
            </ul>
        </div>
    );

}