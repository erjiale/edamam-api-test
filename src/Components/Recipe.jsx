import React from 'react';

const Recipe = (props) => {
    return(
        <>
            <h1>{props.title}</h1>
            <p>Number of calories: {props.calories}</p>
            <a href={props.url}><img src={props.image} alt={props.title} /> </a>
            <p>Url: <a className="Link-styles" href={props.url}>{props.title}</a></p>
        </>
    );
}

export default Recipe;