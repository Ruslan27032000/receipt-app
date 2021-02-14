import React from "react";
import style from './Recipe.module.css';

const Recipe = (props) => {
    return (
        <div className={style.recipe}>
            <h1 >{props.title}</h1>
            <p>Calories: {Math.round(props.calories)} pounds</p>
            <img className={style.image} src={props.img} alt=""/>
            <h2>Ingredients:</h2>
            <ul>
                {props.ingriditents.map(i=>(
                    <li>{i}</li>
                ))}
            </ul>

        </div>
    )
}

export default Recipe;