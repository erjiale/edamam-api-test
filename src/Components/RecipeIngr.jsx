import React from 'react';

const RecipeIngr = (props) => {
    return(
        <>
            {/* <h1>{props.title}</h1>
            <p>Number of calories: {props.calories}</p>
            <img src={props.image} alt={props.title} />
            <p>Url: <a href={props.url}>{props.title}</a></p> */}
            <p>{props.ing}</p>
        </>
    );
}

export default RecipeIngr;