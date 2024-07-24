import React from "react";

export interface Ingredient {
    name: string;
    unit: string
}

export interface Recipe {
    name: string;
    ingredients: {ingredient: Ingredient, amount: number}[]
}

const defaultData = {
    ingredients: [] as Ingredient[],
    recipes: [] as Recipe[],
}

export const DataContext = React.createContext(defaultData);