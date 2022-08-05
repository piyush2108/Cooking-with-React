import React from "react";
import IngreadientsList from "./IngreadientsList";

export default function Recipe(props){
    const { name, cookTime, servings, instructions, ingreadients } = props

    return(
        <div className="recipe">
            <div className="recipe-header">
                <h3 className="recipe-title">{name}</h3>
                <div>
                    <button className="btn btn--primary mr-1">Edit</button>
                    <button className="btn btn-danger">Delete</button>
                </div>
            </div>
            <div className="recipe-row">
                <span className="recipe-label">Cook Time(hrs): </span>
                <span className="recipe-value">{cookTime}</span>
            </div>
            <div className="recipe-row">
                <span className="recipe-label">Servings: </span>
                <span className="recipe-value">{servings}</span>
            </div>
            <div className="recipe-row">
                <span className="recipe-label">Instructions: </span>
                <div className="recipe-value value-indented value-instructions">
                    {instructions}
                </div>
            </div>
            <div className="recipe-row">
                <span className="recipe-label">Ingreadients: </span>
                <div className="recipe-value value-indented ">
                    <IngreadientsList ingreadients={ingreadients}/>
                </div>
            </div>
        </div>
    )
}